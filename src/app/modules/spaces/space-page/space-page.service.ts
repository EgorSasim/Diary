import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable()
export class SpacePageService {
  constructor(
    private spaceApiService: SpaceApiService,
    private listApiService: ListApiService
  ) {}

  public getSpace(spaceId: number): Observable<Space> {
    return this.spaceApiService.getSpace(spaceId);
  }

  public getLists(spaceId: number): Observable<List[]> {
    return this.listApiService.getLists(spaceId);
  }
}
