import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';
import { MatButtonModule } from '@angular/material/button';
import { InputModule } from 'src/app/modules/common/input/input.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    InputModule,
    MatTabsModule,
  ],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
