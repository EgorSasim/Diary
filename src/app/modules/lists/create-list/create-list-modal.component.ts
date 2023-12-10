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
import { CreateListService } from 'src/app/modules/lists/create-list/create-list.service';
import { CreateListForm } from 'src/app/modules/lists/create-list/create-list.typings';
import { List } from 'src/app/modules/lists/lists.typings';

@Component({
  selector: 'dft-create-list-modal',
  templateUrl: './create-list-modal.component.html',
  styleUrl: './create-list-modal.component.scss',
  providers: [CreateListService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateListModalComponent {
  @Input() public spaceId: number;
  @Output() create: EventEmitter<List> = new EventEmitter();
  @Output() public close: EventEmitter<void> = new EventEmitter();

  public readonly requiredFieldError = REQUIRED_FIELD_ERROR;

  public formGroup: FormGroup<CreateListForm> = new FormGroup({
    title: new FormControl(null, Validators.required),
  });

  constructor(
    private createListService: CreateListService,
    private snackBarService: SnackBarService
  ) {}

  public closeModal(): void {
    this.close.emit();
  }

  public createList(): void {
    this.createListService
      .createList(this.formGroup.controls['title'].value, this.spaceId)
      .subscribe({
        next: (res: List) => {
          this.create.emit(res);
          this.closeModal();
        },
        error: () => {
          this.snackBarService.showSnack('error occured', 5000, 'error');
        },
      });
  }
}
