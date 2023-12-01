import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';
import { Space } from 'src/app/modules/spaces/create-space/create-space.typings';

@Injectable()
export class SidePannelService {
  constructor(private spaceApiService: SpaceApiService) {}

  public getSpaces(): Observable<Space[]> {
    return this.spaceApiService.getSpaces();
  }
}
