import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { InputSize } from 'src/app/modules/common/input/input.typings';

@Component({
  selector: 'dft-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSelectorComponent {
  constructor(private translateService: TranslateService) {}
  public setLanguage(language: string): void {
    this.translateService.use(language);
  }
}
