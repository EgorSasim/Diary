import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { Space } from 'src/app/modules/spaces/create-space/create-space.typings';

@Injectable()
export class CreateSpaceModalService {
  constructor(private spaceApiService: SpaceApiService) {}

  public createSpace(name: string): Observable<Space> {
    return this.spaceApiService.createSpace(name);
  }
}
