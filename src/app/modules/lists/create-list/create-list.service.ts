import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';

@Injectable()
export class CreateListService {
  constructor(private listApiService: ListApiService) {}

  public createList(title: string, spaceId: number): Observable<any> {
    console.log('call create list');
    return this.listApiService.createList(title, spaceId);
  }
}
