import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteApiService } from 'src/app/api/note/note-api.service';
import { Note } from 'src/app/modules/notes/typings';

@Injectable()
export class NoteCreateModalService {
  constructor(private noteApiService: NoteApiService) {}

  public createNote(note: Note): Observable<Note> {
    return this.noteApiService.createNote(note);
  }
}
