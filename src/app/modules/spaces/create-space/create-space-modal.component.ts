import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateSpaceModalService } from 'src/app/modules/spaces/create-space/create-space-modal.service';
import { Space } from 'src/app/modules/spaces/create-space/create-space.typings';

@Component({
  selector: 'dft-create-space',
  templateUrl: './create-space-modal.component.html',
  styleUrls: ['./create-space-modal.component.scss'],
  providers: [CreateSpaceModalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSpaceComponent {
  @Output() create: EventEmitter<Space> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();
  public readonly hideSign: string = 'X';

  public formGroup: FormGroup<Space> = new FormGroup({
    name: new FormControl(null),
  });

  constructor(private createSpaceModalService: CreateSpaceModalService) {}

  public closeModal(): void {
    this.close.emit();
  }

  public createSpace(): void {
    this.createSpaceModalService
      .createSpace(this.formGroup.controls['name'].value)
      .subscribe({
        next: (res: Space) => {
          this.create.emit(res);
          this.closeModal();
        },
        error: () => {
          console.log('error occured');
        },
      });
  }
}
