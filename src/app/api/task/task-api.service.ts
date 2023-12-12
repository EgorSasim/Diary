import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormData } from 'src/app/api/common/form.typings';
import { getServerUrl } from 'src/app/api/common/server/server.constants';
import { List } from 'src/app/modules/lists/lists.typings';
import { Space } from 'src/app/modules/spaces/typings';
import { Task } from 'src/app/modules/tasks/typings';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  private serverUrl = getServerUrl();

  constructor(private httpClient: HttpClient) {}

  public getTasks(list: List): Observable<Task[]> {
    return this.httpClient.get(`${this.serverUrl}/tasks`, {
      params: { ...list },
    }) as Observable<any>;
  }

  public createTask(task: Task, list: List): Observable<Task> {
    return this.httpClient.post(`${this.serverUrl}/task`, {
      task,
      list,
    }) as Observable<Task>;
  }

  public removeTask(
    taskId: number,
    listId: List['id'],
    spaceId: Space['id']
  ): Observable<Task> {
    return this.httpClient.delete(`${this.serverUrl}/task`, {
      body: { taskId, listId, spaceId },
    }) as Observable<Task>;
  }

  public updateTask(options: {
    task: Task;
    listId: List['id'];
    spaceId: Space['id'];
  }): Observable<Task> {
    return this.httpClient.put(
      `${this.serverUrl}/task`,
      options
    ) as Observable<Task>;
  }
}
