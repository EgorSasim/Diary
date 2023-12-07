import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Space } from 'src/app/modules/spaces/create-space/create-space.typings';

@Component({
  selector: 'dft-spaces-accordion',
  templateUrl: './spaces-accordion.component.html',
  styleUrls: ['./spaces-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacesAccrodionComponent {
  @Input() public spaces: Space[];
  public panelOpenState = false;
}
