import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getServerUrl } from 'src/app/api/common/server/server.constants';
import { Space } from 'src/app/modules/spaces/create-space/create-space.typings';

@Injectable({
  providedIn: 'root',
})
export class SpaceApiService {
  private serverUrl = getServerUrl();

  constructor(private httpClient: HttpClient) {}

  public createSpace(title: string): Observable<Space> {
    return this.httpClient.post(`${this.serverUrl}/space`, {
      title,
    }) as Observable<Space>;
  }

  public getSpaces(): Observable<Space[]> {
    return this.httpClient.get(`${this.serverUrl}/spaces`) as Observable<
      Space[]
    >;
  }
}
