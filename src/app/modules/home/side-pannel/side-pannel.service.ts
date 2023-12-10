import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, merge, switchMap } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable()
export class SidePannelService {
  constructor(
    private spaceApiService: SpaceApiService,
    private listApiService: ListApiService
  ) {}

  public getSpaces(): Observable<Space[]> {
    return this.spaceApiService.getSpaces();
  }

  public getAllLists(spaceIds: number[]): Observable<List[][]> {
    return forkJoin(spaceIds.map((id) => this.listApiService.getLists(id)));
  }
}
