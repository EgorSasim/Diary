import { NgModule } from '@angular/core';
import { InputComponent } from 'src/app/modules/common/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InputComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
  ],
  exports: [InputComponent],
})
export class InputModule {}
