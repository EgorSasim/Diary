import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';
import { SidePannelService } from 'src/app/modules/home/side-pannel/side-pannel.service';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss'],
  providers: [LightboxService, SidePannelService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePannelComponent implements OnInit {
  public isLightboxVisible$ = this.ligthboxService.getVisibility$();
  public spaces$: Observable<Space[]>;
  public showFiller = false;

  constructor(
    private ligthboxService: LightboxService,
    private sidePannelService: SidePannelService,
    private refreshDataService: RefreshDataService
  ) {}

  public ngOnInit(): void {
    this.spaces$ = this.sidePannelService.getSpaces();
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
