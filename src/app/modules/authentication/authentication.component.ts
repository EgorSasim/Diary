import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';
import {
  INVALID_EMAIL_ERROR,
  REQUIRED_FIELD_ERROR,
} from 'src/app/common/constants/control-errors';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'src/app/common/constants/tokens';
import { DestroyService } from 'src/app/common/services/destroy.service';
import { SnackBarService } from 'src/app/common/services/snackbar.service';
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
  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;
  public readonly requiredFieldAndEmailError = new Map([
    ...REQUIRED_FIELD_ERROR.entries(),
    ...INVALID_EMAIL_ERROR.entries(),
  ]);

  public logInForm: FormGroup<LogInForm> = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  public signUpForm: FormGroup<SignUpForm> = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private destroyService: DestroyService,
    private router: Router
  ) {}

  public logIn(): void {
    this.authenticationService
      .logIn({
        email: this.logInForm.controls['email'].value,
        password: this.logInForm.controls['password'].value,
      })
      .pipe(takeUntil(this.destroyService.destroy$))
      .subscribe((response) => {
        localStorage.setItem(ACCESS_TOKEN, response[ACCESS_TOKEN]);
        localStorage.setItem(REFRESH_TOKEN, response[REFRESH_TOKEN]);
        this.router.navigate(['/home']);
      });
  }

  public signUp(): void {
    this.authenticationService
      .signUp({
        email: this.signUpForm.controls['email'].value,
        password: this.signUpForm.controls['password'].value,
        name: this.signUpForm.controls['name'].value,
      })
      .subscribe((response) => {
        localStorage.setItem(ACCESS_TOKEN, response[ACCESS_TOKEN]);
        localStorage.setItem(REFRESH_TOKEN, response[REFRESH_TOKEN]);
        this.router.navigate(['/home']);
      });
  }
}
