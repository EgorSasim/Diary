import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD_ERROR } from 'src/app/common/constants/control-errors';
import { SnackBarService } from 'src/app/common/services/snackbar.service';
import { NoteCreateModalService } from 'src/app/modules/notes/create/note-create-modal.service';
import { CreateNoteForm } from 'src/app/modules/notes/create/typings';
import { Note } from 'src/app/modules/notes/typings';

@Component({
  selector: 'dft-note-create-modal',
  templateUrl: './note-create-modal.component.html',
  styleUrl: './note-create-modal.component.scss',
  providers: [NoteCreateModalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteCreateModalComponent {
  @Input() public spaceId: number;
  @Output() public create: EventEmitter<Note> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();
  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;

  public formGroup: FormGroup<CreateNoteForm> = new FormGroup({
    title: new FormControl(null, Validators.required),
    text: new FormControl(null),
  });

  constructor(
    private snackBarService: SnackBarService,
    private noteCreateModalService: NoteCreateModalService
  ) {}

  public closeModal(): void {
    this.close.emit();
  }

  public createNote(): void {
    this.noteCreateModalService
      .createNote({ ...this.formGroup.value, spaceId: this.spaceId } as Note)
      .subscribe({
        next: (res: Note) => {
          this.create.emit(res);
          this.closeModal();
        },
        error: () => {
          this.snackBarService.showSnack('error occured', 5000, 'error');
        },
      });
  }
}
