import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteApiService } from 'src/app/api/note/note-api.service';
import { Note } from 'src/app/modules/notes/typings';

@Injectable()
export class NotesEditPageService {
  constructor(private noteApiService: NoteApiService) {}

  public getNote(noteId: number, spaceId: number): Observable<Note> {
    return this.noteApiService.getNote(spaceId, noteId);
  }

  public updateNote(note: Note): Observable<Note> {
    return this.noteApiService.updateNote(note);
  }
}
