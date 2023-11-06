import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePannelComponent {
  private readonly closePannelSign: string = '<<';
  private readonly openPannelSign: string = '>>';
  public readonly closeSpacesSign: string = 'V';
  public readonly openSpaceSign: string = '>';

  public pannelSign = this.closePannelSign;
  public pannelIsOpened = true;
  public spaceSign = this.openSpaceSign;
  public spacesAreOpened = false;

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
}
