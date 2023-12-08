import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable()
export class RenameSpaceModalService {
  constructor(private spaceApiServie: SpaceApiService) {}
  public renameSpace(space: Space): Observable<Object> {
    return this.spaceApiServie.renameSpace(space);
  }
}
