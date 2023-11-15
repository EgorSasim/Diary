import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';

@Component({
  selector: 'dft-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss'],
  providers: [LightboxService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePannelComponent implements OnInit {
  public isLightboxVisible$ = this.ligthboxService.getVisibility$();
  public pannelSign: string;
  public pannelIsOpened = true;
  public spaceSign: string;
  public spacesAreOpened = false;

  private readonly closePannelSign: string = '<<';
  private readonly openPannelSign: string = '>>';
  private readonly closeSpacesSign: string = 'V';
  private readonly openSpaceSign: string = '>';

  constructor(private ligthboxService: LightboxService) {}

  public ngOnInit(): void {
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
}
