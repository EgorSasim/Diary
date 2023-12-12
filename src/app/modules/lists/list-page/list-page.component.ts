import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, filter, map, switchMap, tap } from 'rxjs';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';
import { ListPageService } from 'src/app/modules/lists/list-page/list-page.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Task } from 'src/app/modules/tasks/typings';

@Component({
  selector: 'dft-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
  providers: [ListPageService, LightboxService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent implements OnInit {
  public list$: BehaviorSubject<List> = new BehaviorSubject(null);
  public tasks$: BehaviorSubject<Task[]> = new BehaviorSubject(null);
  public isLightBoxVisible$: Observable<boolean> =
    this.lightboxService.getVisibility$();
  private id: number;

  constructor(
    private listPageService: ListPageService,
    private activatedRoute: ActivatedRoute,
    private refreshDataService: RefreshDataService,
    private lightboxService: LightboxService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.trackRouteParams();
    this.trackRefreshParams();
  }

  public showCreateTaskModal(): void {
    this.lightboxService.showLightbox();
  }

  public closeModal(): void {
    this.lightboxService.hideLightbox();
  }

  public updateValues(): void {
    this.refreshDataService.refreshData();
  }

  public removeTask(taskId: number): void {
    this.listPageService
      .removeTask(taskId, this.list$.value.id, this.list$.value.spaceId)
      .subscribe(() => this.refreshDataService.refreshData());
  }

  public toggleTaskState(task: Task): void {
    this.listPageService
      .updateTaskState({
        task: task,
        listId: this.list$.value.id,
        spaceId: this.list$.value.spaceId,
      })
      .subscribe(() => this.refreshDataService.refreshData());
  }

  private trackRouteParams(): void {
    this.activatedRoute.params
      .pipe(
        map((p) => p['id']),
        tap((id) => (this.id = id)),
        switchMap((id) => this.listPageService.getList(id)),
        tap((list) => {
          if (!list) {
            this.router.navigate['/home'];
          }
        }),
        filter((list) => !!list),
        tap((list) => this.list$.next(list)),
        switchMap((list) => this.listPageService.getTasks(list))
      )
      .subscribe((tasks) => {
        this.tasks$.next(tasks);
        this.refreshDataService.refreshData();
      });
  }

  private trackRefreshParams(): void {
    this.refreshDataService.areRefreshed$
      .pipe(
        switchMap(() => this.listPageService.getList(this.id)),
        tap((list) => {
          if (!list) {
            this.router.navigate['/home'];
          }
        }),
        filter((list) => !!list),
        tap((list) => this.list$.next(list)),
        switchMap((list) => this.listPageService.getTasks(list))
      )
      .subscribe((tasks) => this.tasks$.next(tasks));
  }
}
