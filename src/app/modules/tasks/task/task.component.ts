import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Task } from 'src/app/modules/tasks/typings';

@Component({
  selector: 'dft-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<number> = new EventEmitter();
  @Output() toggle: EventEmitter<Task> = new EventEmitter();

  public toggleTaskCompletion(): void {
    this.toggle.emit({ ...this.task, completed: !this.task.completed });
  }

  public removeTask(taskId: number): void {
    this.remove.emit(taskId);
  }
}
