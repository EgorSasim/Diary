import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { TaskApiService } from 'src/app/api/task/task-api.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Space } from 'src/app/modules/spaces/typings';
import { Task } from 'src/app/modules/tasks/typings';

@Injectable()
export class ListPageService {
  constructor(
    private listApiService: ListApiService,
    private taskApiService: TaskApiService
  ) {}

  public getList(id: number): Observable<List> {
    return this.listApiService.getList(id);
  }

  public getTasks(list: List): Observable<Task[]> {
    return this.taskApiService.getTasks(list);
  }

  public removeTask(
    taskId: number,
    listId: List['id'],
    spaceId: Space['id']
  ): Observable<Task> {
    return this.taskApiService.removeTask(taskId, listId, spaceId);
  }

  public updateTaskState(options: {
    task: Task;
    listId: List['id'];
    spaceId: Space['id'];
  }): Observable<Task> {
    return this.taskApiService.updateTask(options);
  }
}
