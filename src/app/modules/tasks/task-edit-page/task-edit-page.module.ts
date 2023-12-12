import { NgModule } from '@angular/core';
import { TaskEditPageComponent } from 'src/app/modules/tasks/task-edit-page/task-edit-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InputModule } from 'src/app/modules/common/input/input.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [TaskEditPageComponent],
  imports: [
    MatCardModule,
    MatIconModule,
    InputModule,
    TranslateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  exports: [TaskEditPageComponent],
})
export class TaskEditPageModule {}
