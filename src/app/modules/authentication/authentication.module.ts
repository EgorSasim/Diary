import { NgModule } from '@angular/core';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';

@NgModule({
  declarations: [AuthenticationComponent],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
