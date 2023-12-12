import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getServerUrl } from 'src/app/api/common/server/server.constants';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private serverUrl = getServerUrl();

  constructor(private httpClient: HttpClient) {}

  public getUserName(): Observable<{ userName: string }> {
    return this.httpClient.get(`${this.serverUrl}/user-name`) as Observable<{
      userName: string;
    }>;
  }
}
