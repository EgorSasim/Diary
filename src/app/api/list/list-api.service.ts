import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getServerUrl } from 'src/app/api/common/server/server.constants';
import { List } from 'src/app/modules/lists/lists.typings';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable({
  providedIn: 'root',
})
export class ListApiService {
  private serverUrl = getServerUrl();

  constructor(private httpClient: HttpClient) {}

  public createList(title: string, spaceId: number): Observable<List> {
    return this.httpClient.post(`${this.serverUrl}/list`, {
      title,
      spaceId,
    }) as Observable<List>;
  }

  public getList(id: number): Observable<List> {
    return this.httpClient.get(
      `${this.serverUrl}/list/${id}`
    ) as Observable<List>;
  }

  public getLists(spaceId: number): Observable<List[]> {
    return this.httpClient.get(`${this.serverUrl}/lists`, {
      params: { spaceId },
    }) as Observable<List[]>;
  }

  public removeList(listId: List['id'], spaceId: number): Observable<Object> {
    return this.httpClient.delete(`${this.serverUrl}/list`, {
      body: { listId, spaceId },
    });
  }

  public renameList(list: List): Observable<Object> {
    return this.httpClient.put(`${this.serverUrl}/list`, list);
  }
}
