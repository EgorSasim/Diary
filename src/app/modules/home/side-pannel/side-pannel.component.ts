import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  forkJoin,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { DestroyService } from 'src/app/common/services/destroy.service';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';
import { SidePannelService } from 'src/app/modules/home/side-pannel/side-pannel.service';
import { List } from 'src/app/modules/lists/lists.typings';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss'],
  providers: [LightboxService, SidePannelService, DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePannelComponent implements OnInit {
  public isLightboxVisible$ = this.ligthboxService.getVisibility$();
  public spaces$: BehaviorSubject<Space[]> = new BehaviorSubject([]);
  public lists$: BehaviorSubject<List[]> = new BehaviorSubject([]);
  public showFiller = false;

  constructor(
    private ligthboxService: LightboxService,
    private sidePannelService: SidePannelService,
    private refreshDataService: RefreshDataService,
    private destroyService: DestroyService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.sidePannelService
      .getSpaces()
      .pipe(
        tap((spaces) => this.spaces$.next(spaces)),
        switchMap((spaces) =>
          this.sidePannelService.getAllLists(spaces.map((space) => space.id))
        ),
        tap((lists) => this.lists$.next([].concat(...lists))),
        take(1)
      )
      .subscribe();

    this.refreshDataService.areRefreshed$
      .pipe(
        switchMap(() => this.sidePannelService.getSpaces()),
        tap((spaces) => this.spaces$.next(spaces)),
        switchMap((spaces) =>
          this.sidePannelService.getAllLists(spaces.map((space) => space.id))
        ),
        tap((lists) => this.lists$.next([].concat(...lists))),
        takeUntil(this.destroyService.destroy$)
      )
      .subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
  }

  public showCreateSpaceLightbox(): void {
    this.ligthboxService.showLightbox();
  }

  public hideCreateSpaceLightbox(): void {
    this.ligthboxService.hideLightbox();
  }

  public refreshData(): void {
    this.refreshDataService.refreshData();
  }
}
