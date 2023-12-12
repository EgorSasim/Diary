import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskApiService } from 'src/app/api/task/task-api.service';
import { Task } from 'src/app/modules/tasks/typings';

@Injectable()
export class TaskEditPageService {
  constructor(private taskApiService: TaskApiService) {}

  public getTask(ids: {
    spaceId: number;
    listId: number;
    taskId: number;
  }): Observable<Task> {
    return this.taskApiService.getTask(ids);
  }

  public editTask(options: {
    spaceId: number;
    listId: number;
    task: Task;
  }): Observable<Task> {
    return this.taskApiService.updateTask(options);
  }
}
