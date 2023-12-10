import { Injectable } from '@angular/core';
import { ReplaySubject, forkJoin, switchMap, takeUntil, tap } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { SpaceApiService } from 'src/app/api/space/spase-api.service';

@Injectable({
  providedIn: 'root',
})
export class RefreshDataService {
  public areRefreshed$: ReplaySubject<void> = new ReplaySubject(1);

  constructor(
    private listApiService: ListApiService,
    private spaceApiService: SpaceApiService
  ) {}

  public refreshData(): void {
    this.spaceApiService
      .getSpaces()
      .pipe(
        tap((spaces) => {
          if (!spaces.length) {
            this.areRefreshed$.next();
          }
        }),
        switchMap((spaces) =>
          forkJoin(
            spaces.map((space) => this.listApiService.getLists(space.id))
          )
        )
      )
      .subscribe(() => {
        this.areRefreshed$.next();
      });
  }
}
