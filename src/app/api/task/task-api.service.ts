import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getServerUrl } from 'src/app/api/common/server/server.constants';
import { List } from 'src/app/modules/lists/lists.typings';
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
}
