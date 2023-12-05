import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dft-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSelectorComponent {
  constructor(private translateService: TranslateService) {}

  public setLanguage(language: any): void {
    console.log('language: ', language);
    this.translateService.use(language);
  }
}
