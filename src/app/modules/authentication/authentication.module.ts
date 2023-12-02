import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [ReactiveFormsModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
