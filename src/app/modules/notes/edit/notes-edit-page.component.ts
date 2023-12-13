import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { REQUIRED_FIELD_ERROR } from 'src/app/common/constants/control-errors';
import { CreateNoteForm } from 'src/app/modules/notes/create/typings';
import { NotesEditPageService } from 'src/app/modules/notes/edit/notes-edit-page.service';
import { Note, NoteForm } from 'src/app/modules/notes/typings';

@Component({
  selector: 'dft-notes-edit-page',
  templateUrl: './notes-edit-page.component.html',
  styleUrl: './notes-edit-page.component.scss',
  providers: [NotesEditPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesEditPageComponent {
  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;
  public formGroup: FormGroup<NoteForm> = new FormGroup({
    id: new FormControl(null),
    spaceId: new FormControl(null),
    text: new FormControl(null),
    title: new FormControl(null, Validators.required),
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private notesEditPageService: NotesEditPageService,
    private router: Router
  ) {
    this.activatedRoute.params
      .pipe(
        map((p) => ({
          spaceId: p['id'],
          noteId: p['noteId'],
        })),
        switchMap((ids: { spaceId: number; noteId: number }) =>
          this.notesEditPageService.getNote(ids.noteId, ids.spaceId)
        )
      )
      .subscribe((note) => this.formGroup.setValue(note));
  }

  public editNote(): void {
    this.notesEditPageService
      .updateNote(this.formGroup.value as Note)
      .subscribe();
    this.router.navigate(this.router.url.split('/').slice(0, -2));
  }
}
