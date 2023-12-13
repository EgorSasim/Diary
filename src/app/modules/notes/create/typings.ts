import { FormControl } from '@angular/forms';

export interface CreateNoteForm {
  title: FormControl<string>;
  text: FormControl<string>;
}
