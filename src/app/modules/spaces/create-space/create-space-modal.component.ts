import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD_ERROR } from 'src/app/common/constants/control-errors';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { SnackBarService } from 'src/app/common/services/snackbar.service';
import { CreateSpaceModalService } from 'src/app/modules/spaces/create-space/create-space-modal.service';
import { CreateSpace } from 'src/app/modules/spaces/create-space/create-space.typings';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-create-space-modal',
  templateUrl: './create-space-modal.component.html',
  styleUrls: ['./create-space-modal.component.scss'],
  providers: [CreateSpaceModalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSpaceModalComponent {
  @Output() create: EventEmitter<Space> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();

  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;

  public formGroup: FormGroup<CreateSpace> = new FormGroup({
    title: new FormControl(null, Validators.required),
  });

  constructor(
    private createSpaceModalService: CreateSpaceModalService,
    private refreshDataService: RefreshDataService,
    private snackBarService: SnackBarService
  ) {}

  public closeModal(): void {
    this.close.emit();
  }

  public createSpace(): void {
    this.createSpaceModalService
      .createSpace(this.formGroup.controls['title'].value)
      .subscribe({
        next: (res: Space) => {
          this.refreshDataService.refreshData();
          this.create.emit(res);
          this.closeModal();
        },
        error: () => {
          this.snackBarService.showSnack('error occured', 5000, 'error');
        },
      });
  }
}
