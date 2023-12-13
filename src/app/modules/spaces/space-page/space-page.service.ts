import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { NoteApiService } from 'src/app/api/note/note-api.service';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Note } from 'src/app/modules/notes/typings';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable()
export class SpacePageService {
  constructor(
    private spaceApiService: SpaceApiService,
    private listApiService: ListApiService,
    private noteApiService: NoteApiService
  ) {}

  public getSpace(spaceId: number): Observable<Space> {
    return this.spaceApiService.getSpace(spaceId);
  }

  public getLists(spaceId: number): Observable<List[]> {
    return this.listApiService.getLists(spaceId);
  }

  public removeList(listId: number, spaceId: number): Observable<Object> {
    return this.listApiService.removeList(listId, spaceId);
  }

  public getNotes(spaceId: number): Observable<Note[]> {
    return this.noteApiService.getNotes(spaceId);
  }

  public removeNote(note: Note): Observable<Note> {
    return this.noteApiService.removeNote(note);
  }
}
