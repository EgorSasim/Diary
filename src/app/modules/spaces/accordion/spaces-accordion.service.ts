import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable()
export class SpacesAccordionService {
  constructor(
    private spaceApiService: SpaceApiService,
    private listApiSerive: ListApiService
  ) {}

  public removeSpace(space: Space): Observable<Object> {
    return this.spaceApiService.removeSpace(space);
  }

  public renameSpace(space: Space): Observable<Object> {
    return this.spaceApiService.renameSpace(space);
  }

  public getLists(spaceId: Space['id']): Observable<List[]> {
    return this.listApiSerive.getLists(spaceId);
  }
}
