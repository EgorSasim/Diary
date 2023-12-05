import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [ReactiveFormsModule, TranslateModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
