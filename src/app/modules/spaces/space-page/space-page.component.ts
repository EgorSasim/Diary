import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  filter,
  map,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { DestroyService } from 'src/app/common/services/destroy.service';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { SpacePageService } from 'src/app/modules/spaces/space-page/space-page.service';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-space-page',
  templateUrl: './space-page.component.html',
  styleUrl: './space-page.component.scss',
  providers: [SpacePageService, DestroyService, LightboxService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacePageComponent implements OnInit {
  public space$: BehaviorSubject<Space> = new BehaviorSubject(null);
  public lists$: BehaviorSubject<List[]> = new BehaviorSubject(null);
  public notes$: BehaviorSubject<string[]> = new BehaviorSubject(null);
  public renameListModal$: Observable<boolean> =
    this.lightboxService.getVisibility$();
  public selectedList$: BehaviorSubject<List> = new BehaviorSubject(null);

  private id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spacePageService: SpacePageService,
    private destroyService: DestroyService,
    private refreshDataService: RefreshDataService,
    private lightboxService: LightboxService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.trackRouteParams();
    this.trackRefreshParams();
  }

  public removeList(list: List) {
    this.spacePageService
      .removeList(list.id, list.spaceId)
      .subscribe(() => this.refreshDataService.refreshData());
  }

  public showRenameListModal(list: List) {
    this.selectedList$.next(list);
    this.lightboxService.showLightbox();
  }

  public closeModal(): void {
    this.lightboxService.hideLightbox();
  }

  public refreshData(): void {
    this.refreshDataService.refreshData();
  }

  private trackRouteParams(): void {
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
  }

  private trackRefreshParams(): void {
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

  public saySmth(spaceId: number, listId: number): void {
    console.log('spaceId: ', spaceId);
    console.log('listId: ', listId);
  }
}
