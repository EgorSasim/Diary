import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { ACCESS_TOKEN } from 'src/app/common/constants/tokens';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.addTokenToRequest(request);

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('error: ', err);
        if (err.status === 401) {
          alert('Invalid email or password');
        } else if (
          err.status === 498 &&
          !request.url.includes('refresh-token')
        ) {
          return this.authenticationService.refreshToken().pipe(
            switchMap((res) => {
              if (res) {
                this.authenticationService.setAccessToken(res);
                request = this.addTokenToRequest(request);
                return next.handle(request);
              }
              return throwError(err);
            })
          );
        }
        if (err.status === 409) {
          alert('User with this email already exists!!!');
        }

        this.router.navigate(['/login']);
        return throwError(err);
      })
    );
  }

  private addTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem(ACCESS_TOKEN);
    return token
      ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        })
      : request;
  }
}
