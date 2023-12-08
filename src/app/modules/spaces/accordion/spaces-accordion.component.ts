import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Space } from 'src/app/modules/spaces/typings';
@Component({
  selector: 'dft-spaces-accordion',
  templateUrl: './spaces-accordion.component.html',
  styleUrls: ['./spaces-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacesAccrodionComponent {
  @Input() public spaces: Space[];

  public addItem(event: Event): void {
    event.stopPropagation();
  }

  public editSpace(event: Event): void {
    event.stopPropagation();
  }
}