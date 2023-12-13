import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, merge, of, switchMap } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { NoteApiService } from 'src/app/api/note/note-api.service';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Note } from 'src/app/modules/notes/typings';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable()
export class SidePannelService {
  constructor(
    private spaceApiService: SpaceApiService,
    private listApiService: ListApiService,
    private noteApiService: NoteApiService
  ) {}

  public getSpaces(): Observable<Space[]> {
    return this.spaceApiService.getSpaces();
  }

  public getAllLists(spaceIds: number[]): Observable<List[][]> {
    return forkJoin(spaceIds.map((id) => this.listApiService.getLists(id)));
  }
}
