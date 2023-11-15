import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'dft-create-space',
  templateUrl: './create-space-modal.component.html',
  styleUrls: ['./create-space-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSpaceComponent {
  @Output() public close: EventEmitter<void> = new EventEmitter();
  public readonly hideSign: string = 'X';

  public closeModal(): void {
    this.close.emit();
  }
}
