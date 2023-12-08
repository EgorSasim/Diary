import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD_ERROR } from 'src/app/common/constants/control-errors';
import { SnackBarService } from 'src/app/common/services/snackbar.service';
import { CreateSpace } from 'src/app/modules/spaces/create-space/create-space.typings';
import { RenameSpaceModalService } from 'src/app/modules/spaces/rename-space-modal/rename-space-modal.service';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-rename-space-modal',
  templateUrl: './rename-space-modal.component.html',
  styleUrl: './rename-space-modal.component.scss',
  providers: [RenameSpaceModalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenameSpaceModalComponent implements OnInit {
  @Input() public space: Space;
  @Output() rename: EventEmitter<Space> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();

  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;

  public formGroup: FormGroup<CreateSpace> = new FormGroup({
    title: new FormControl(null, Validators.required),
  });

  constructor(
    private renameSpaceModalService: RenameSpaceModalService,
    private snackBarService: SnackBarService
  ) {}

  public ngOnInit(): void {
    console.log('on init space: ', this.space);
  }
  public closeModal(): void {
    this.close.emit();
  }

  public renameSpace(): void {
    this.renameSpaceModalService
      .renameSpace({
        ...this.space,
        title: this.formGroup.controls['title'].value,
      })
      .subscribe({
        next: (res: Space) => {
          this.rename.emit(res);
          this.closeModal();
        },
        error: () => {
          this.snackBarService.showSnack('error occured', 5000, 'error');
        },
      });
  }
}
