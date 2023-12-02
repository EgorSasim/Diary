import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormData } from 'src/app/api/common/form.typings';
import { getServerUrl } from 'src/app/api/common/server/server.constants';
import {
  LogInForm,
  SignUpForm,
} from 'src/app/modules/authentication/authentication.typings';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private serverUrl = getServerUrl();

  constructor(private httpClient: HttpClient) {}

  public checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.httpClient.get<boolean>(`${this.serverUrl}/authenticate`);
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
}
