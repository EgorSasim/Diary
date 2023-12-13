import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { InputModule } from 'src/app/modules/common/input/input.module';
import { NotesEditPageComponent } from 'src/app/modules/notes/edit/notes-edit-page.component';

@NgModule({
  declarations: [NotesEditPageComponent],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    InputModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
  ],
  exports: [NotesEditPageComponent],
})
export class NotesEditPageModule {}
