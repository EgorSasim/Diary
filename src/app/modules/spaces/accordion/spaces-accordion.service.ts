import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { Space } from 'src/app/modules/spaces/typings';

@Injectable()
export class SpacesAccordionService {
  constructor(private spaceApiService: SpaceApiService) {}

  public removeSpace(space: Space): Observable<Object> {
    return this.spaceApiService.removeSpace(space);
  }

  public renameSpace(space: Space): Observable<Object> {
    return this.spaceApiService.renameSpace(space);
  }
}
