import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/api/user/user-api.service';

@Injectable()
export class EmptyPageService {
  constructor(private userApiService: UserApiService) {}

  public getUserName(): Observable<{ userName: string }> {
    return this.userApiService.getUserName();
  }
}
