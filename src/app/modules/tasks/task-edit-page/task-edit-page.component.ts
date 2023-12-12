import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, filter, map, switchMap, tap } from 'rxjs';
import { REQUIRED_FIELD_ERROR } from 'src/app/common/constants/control-errors';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { TaskEditPageService } from 'src/app/modules/tasks/task-edit-page/task-edit-page.service';
import { Task, TaskForm } from 'src/app/modules/tasks/typings';

@Component({
  selector: 'dft-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrl: './task-edit-page.component.scss',
  providers: [TaskEditPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditPageComponent implements OnInit {
  private taskId: number;
  private listId: number;
  private spaceId: number;
  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;

  public formGroup: FormGroup<TaskForm> = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    completed: new FormControl(false),
    description: new FormControl(null),
    startTime: new FormControl(null),
    endTime: new FormControl(null),
    listId: new FormControl(null),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskEditPageService: TaskEditPageService,
    private refreshDataService: RefreshDataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.trackRouteParams();
    this.trackRefreshParams();
  }

  public editTask(): void {
    this.taskEditPageService
      .editTask({
        task: this.formGroup.value as Task,
        listId: this.listId,
        spaceId: this.spaceId,
      })
      .subscribe((task) =>
        this.router.navigate(this.router.url.split('/').slice(0, -2))
      );
  }

  private trackRouteParams(): void {
    this.activatedRoute.params
      .pipe(
        map((p) => ({
          spaceId: p['id'],
          listId: p['listId'],
          taskId: p['taskId'],
        })),
        tap((ids) => {
          this.listId = ids.listId;
          this.spaceId = ids.spaceId;
          this.taskId = ids.taskId;
        }),
        switchMap((ids) => this.taskEditPageService.getTask(ids)),
        tap((task) => {
          if (!task) {
            this.router.navigate['/home'];
          }
        }),
        filter((task) => !!task),
        tap((task) => this.formGroup.setValue(task))
      )
      .subscribe(() => {
        this.refreshDataService.refreshData();
      });
  }

  private trackRefreshParams(): void {
    this.refreshDataService.areRefreshed$
      .pipe(
        switchMap(() =>
          this.taskEditPageService.getTask({
            listId: this.listId,
            spaceId: this.spaceId,
            taskId: this.taskId,
          })
        ),
        tap((task) => {
          if (!task) {
            this.router.navigate['/home'];
          }
        }),
        filter((task) => !!task),
        tap((task) => this.formGroup.setValue(task))
      )
      .subscribe();
  }
}
