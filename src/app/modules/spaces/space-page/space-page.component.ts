import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, filter, map, switchMap, takeUntil, tap } from 'rxjs';
import { DestroyService } from 'src/app/common/services/destroy.service';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { SpacePageService } from 'src/app/modules/spaces/space-page/space-page.service';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-space-page',
  templateUrl: './space-page.component.html',
  styleUrl: './space-page.component.scss',
  providers: [SpacePageService, DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacePageComponent implements OnInit {
  public space$: BehaviorSubject<Space> = new BehaviorSubject(null);
  public lists$: BehaviorSubject<List[]> = new BehaviorSubject(null);
  private id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spacePageService: SpacePageService,
    private destroyService: DestroyService,
    private refreshDataService: RefreshDataService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((p) => p['id']),
        tap((id) => (this.id = id)),
        switchMap((id) =>
          this.spacePageService.getSpace(id).pipe(
            tap((space) => {
              if (!space) {
                this.router.navigate(['/home']);
              }
            }),
            filter((space) => !!space),
            tap((space) => this.space$.next(space)),
            switchMap((space) => this.spacePageService.getLists(space.id))
          )
        ),
        takeUntil(this.destroyService.destroy$)
      )
      .subscribe((lists) => {
        this.lists$.next(lists);
      });

    this.refreshDataService.areRefreshed$
      .pipe(
        switchMap(() =>
          this.spacePageService.getSpace(this.id).pipe(
            tap((space) => {
              if (!space) {
                this.router.navigate(['/home']);
              }
            }),
            filter((space) => !!space),
            tap((space) => {
              this.space$.next(space);
            }),
            switchMap((space) => this.spacePageService.getLists(space.id))
          )
        )
      )
      .subscribe((lists) => this.lists$.next(lists));
  }
}
