import { Injectable, Injector } from '@angular/core';
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
import { SnackBarService } from 'src/app/common/services/snackbar.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.addTokenToRequest(request);
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.snackBarService.showSnack(
            'Invalid email or password!!!',
            5000,
            'error'
          );
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
          this.snackBarService.showSnack(
            'User with this email already exists!!!',
            5000,
            'error'
          );
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
