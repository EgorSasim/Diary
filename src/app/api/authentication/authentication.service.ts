import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormData } from 'src/app/api/common/form.typings';
import { getServerUrl } from 'src/app/api/common/server/server.constants';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'src/app/common/constants/tokens';
import { SnackBarService } from 'src/app/common/services/snackbar.service';
import {
  LogInForm,
  SignUpForm,
} from 'src/app/modules/authentication/authentication.typings';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private serverUrl = getServerUrl();

  constructor(private httpClient: HttpClient) {}

  public checkAuthentication(): boolean {
    return !!localStorage.getItem(ACCESS_TOKEN);
  }

  public logIn(params: FormData<LogInForm>): Observable<FormData<LogInForm>> {
    return this.httpClient.post<FormData<LogInForm>>(
      `${this.serverUrl}/login`,
      { email: params.email, password: params.password }
    );
  }

  public signUp(
    params: FormData<SignUpForm>
  ): Observable<FormData<SignUpForm>> {
    return this.httpClient.post<FormData<SignUpForm>>(
      `${this.serverUrl}/signup`,
      { email: params.email, password: params.password, name: params.name }
    );
  }

  public refreshToken(): Observable<any> {
    return this.httpClient.post(
      `${this.serverUrl}/refresh-token`,
      {
        [REFRESH_TOKEN]: localStorage.getItem(REFRESH_TOKEN),
      },
      { responseType: 'text' }
    );
  }

  public setAccessToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }
}
