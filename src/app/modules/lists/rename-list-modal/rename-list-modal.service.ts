import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { List } from 'src/app/modules/lists/lists.typings';

@Injectable()
export class RenameListModalService {
  constructor(private listApiServie: ListApiService) {}
  public renameList(list: List): Observable<Object> {
    return this.listApiServie.renameList(list);
  }
}
