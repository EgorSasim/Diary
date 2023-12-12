import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData } from 'src/app/api/common/form.typings';
import { TaskApiService } from 'src/app/api/task/task-api.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Task } from 'src/app/modules/tasks/typings';

@Injectable()
export class CreateTaskService {
  constructor(private taskApiService: TaskApiService) {}

  public createTask(task: Task, list: List): Observable<Task> {
    return this.taskApiService.createTask(task, list);
  }
}
