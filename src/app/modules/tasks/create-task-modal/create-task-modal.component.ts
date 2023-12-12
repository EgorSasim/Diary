import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD_ERROR } from 'src/app/common/constants/control-errors';
import { SnackBarService } from 'src/app/common/services/snackbar.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { CreateTaskService } from 'src/app/modules/tasks/create-task-modal/create-task.service';
import { CreateTaskForm } from 'src/app/modules/tasks/create-task-modal/create-task.typings';
import { Task } from 'src/app/modules/tasks/typings';

@Component({
  selector: 'dft-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrl: './create-task-modal.component.scss',
  providers: [CreateTaskService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskModalComponent {
  @Input() public list: List;
  @Output() create: EventEmitter<Task> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();

  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;

  public formGroup: FormGroup<CreateTaskForm> = new FormGroup({
    title: new FormControl(null, Validators.required),
    completed: new FormControl(false),
    description: new FormControl(null),
    startTime: new FormControl(null),
    endTime: new FormControl(null),
  });

  constructor(
    private createTaskService: CreateTaskService,
    private snackBarService: SnackBarService
  ) {}

  public closeModal(): void {
    this.close.emit();
  }

  public createTask(): void {
    this.swtichTimes();
    this.createTaskService
      .createTask(
        { id: null, listId: this.list.id, ...this.formGroup.value } as Task,
        this.list
      )
      .subscribe({
        next: (res: Task) => {
          this.create.emit(res);
          this.closeModal();
        },
        error: () => {
          this.snackBarService.showSnack('error occured', 5000, 'error');
        },
      });
  }

  public swtichTimes(): void {
    const startTime = new Date(this.formGroup.controls.startTime?.value);
    const endTime = new Date(this.formGroup.controls.endTime?.value);

    if (startTime && endTime && startTime > endTime) {
      this.formGroup.controls['startTime'].setValue(endTime);
      this.formGroup.controls['endTime'].setValue(startTime);
    }
  }
}
