import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, takeUntil } from 'rxjs';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';
import { DestroyService } from 'src/app/common/services/common/destroy/destroy.service';
import {
  LogInForm,
  SignUpForm,
} from 'src/app/modules/authentication/authentication.typings';

@Component({
  selector: 'dft-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {
  public logInForm: FormGroup<LogInForm> = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  public signUpForm: FormGroup<SignUpForm> = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    name: new FormControl(null),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private destroyService: DestroyService,
    private router: Router
  ) {}

  public logIn(): void {
    console.log('log in');
    this.authenticationService
      .logIn({
        email: this.logInForm.controls['email'].value,
        password: this.logInForm.controls['password'].value,
      })
      .pipe(takeUntil(this.destroyService.destroy$))
      .subscribe((response) => {
        localStorage.setItem('token', response['access_token']);
        localStorage.setItem('userId', response['id']);
        this.router.navigate(['/home']);
      });
  }

  public signUp(): void {
    console.log('sign up');
    this.authenticationService
      .signUp({
        email: this.signUpForm.controls['email'].value,
        password: this.signUpForm.controls['password'].value,
        name: this.signUpForm.controls['name'].value,
      })
      .subscribe((response) => {
        localStorage.setItem('token', response['access_token']);
        localStorage.setItem('userId', response['id']);
        this.router.navigate(['/home']);
      });
  }
}
