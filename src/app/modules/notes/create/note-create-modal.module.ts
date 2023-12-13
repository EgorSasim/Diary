import { NgModule } from '@angular/core';
import { NoteCreateModalComponent } from 'src/app/modules/notes/create/note-create-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { InputModule } from 'src/app/modules/common/input/input.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NoteCreateModalComponent],
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
  exports: [NoteCreateModalComponent],
})
export class NoteCreateModalModule {}
