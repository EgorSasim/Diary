import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LangSelectorComponent } from 'src/app/modules/common/lang-selector/lang-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [LangSelectorComponent],
  imports: [
    TranslateModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [LangSelectorComponent],
})
export class LangSelectorModule {}
