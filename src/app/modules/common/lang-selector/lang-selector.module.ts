import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LangSelectorComponent } from 'src/app/modules/common/lang-selector/lang-selector.component';

@NgModule({
  declarations: [LangSelectorComponent],
  imports: [TranslateModule],
  exports: [LangSelectorComponent],
})
export class LangSelectorModule {}
