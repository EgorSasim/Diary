import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';
import { Space } from 'src/app/modules/common/spaces/create-space/create-space.typings';
import { SidePannelService } from 'src/app/modules/home/side-pannel/side-pannel.service';

@Component({
  selector: 'dft-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss'],
  providers: [LightboxService, SidePannelService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePannelComponent implements OnInit {
  public isLightboxVisible$ = this.ligthboxService.getVisibility$();
  public pannelSign: string;
  public pannelIsOpened = true;
  public spaceSign: string;
  public spacesAreOpened = false;
  public spaces$: Observable<Space[]>;

  private readonly closePannelSign: string = '<<';
  private readonly openPannelSign: string = '>>';
  private readonly closeSpacesSign: string = 'V';
  private readonly openSpaceSign: string = '>';

  constructor(
    private ligthboxService: LightboxService,
    private sidePannelService: SidePannelService
  ) {}

  public ngOnInit(): void {
    this.spaces$ = this.sidePannelService.getSpaces();

    this.pannelSign = this.closePannelSign;
    this.spaceSign = this.openSpaceSign;
  }

  public togglePannel(): void {
    this.pannelSign =
      this.pannelSign === this.closePannelSign
        ? this.openPannelSign
        : this.closePannelSign;
    this.pannelIsOpened = !this.pannelIsOpened;
  }

  public toggleSpaces(): void {
    this.spaceSign =
      this.spaceSign === this.closeSpacesSign
        ? this.openSpaceSign
        : this.closeSpacesSign;
    this.spacesAreOpened = !this.spacesAreOpened;
  }

  public showCreateSpaceLightbox(): void {
    this.ligthboxService.showLightbox();
  }

  public hideCreateSpaceLightbox(): void {
    this.ligthboxService.hideLightbox();
  }

  public refreshSpaces(): void {
    this.spaces$ = this.sidePannelService.getSpaces();
  }
}
