import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  InputSize,
  InputType,
  StrictInputType,
} from 'src/app/modules/common/input/input.typings';

@Component({
  selector: 'dft-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() public size: InputSize = { width: '10rem', height: '2rem' };
  @Input() public control: FormControl<any> = new FormControl('');
  @Input() public placeholder: string = '';
  @Input() public label: string = '';
  @Input() public errors: Map<string, string>;
  @Input() public type: InputType = StrictInputType.TEXT;
}
