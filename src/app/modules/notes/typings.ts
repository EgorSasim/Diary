import { FormControl } from '@angular/forms';

export interface Note {
  id: number;
  title: string;
  text: string;
  spaceId: number;
}

export interface NoteForm {
  id: FormControl<number>;
  title: FormControl<string>;
  text: FormControl<string>;
  spaceId: FormControl<number>;
}
