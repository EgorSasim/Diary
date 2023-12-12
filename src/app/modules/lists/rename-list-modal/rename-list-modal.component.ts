import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUIRED_FIELD_ERROR } from 'src/app/common/constants/control-errors';
import { SnackBarService } from 'src/app/common/services/snackbar.service';
import { CreateListForm } from 'src/app/modules/lists/create-list/create-list.typings';
import { List } from 'src/app/modules/lists/lists.typings';
import { RenameListModalService } from 'src/app/modules/lists/rename-list-modal/rename-list-modal.service';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-rename-list-modal',
  templateUrl: './rename-list-modal.component.html',
  styleUrl: './rename-list-modal.component.scss',
  providers: [RenameListModalService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenameListModalComponent {
  @Input() public list: List;
  @Output() rename: EventEmitter<List> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();

  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;

  public formGroup: FormGroup<CreateListForm>;

  constructor(
    private renameListModalService: RenameListModalService,
    private snackBarService: SnackBarService
  ) {}

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(this.list.title, Validators.required),
    });
  }

  public closeModal(): void {
    this.close.emit();
  }

  public renameList(): void {
    this.renameListModalService
      .renameList({
        ...this.list,
        title: this.formGroup.controls['title'].value,
      })
      .subscribe({
        next: (res: List) => {
          this.rename.emit(res);
          this.closeModal();
        },
        error: () => {
          this.snackBarService.showSnack('error occured', 5000, 'error');
        },
      });
  }
}
