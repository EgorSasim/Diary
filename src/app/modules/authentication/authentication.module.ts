import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [ReactiveFormsModule, TranslateModule, MatButtonModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
