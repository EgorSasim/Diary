import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSpaceComponent } from 'src/app/modules/spaces/create-space/create-space-modal.component';

@NgModule({
  declarations: [CreateSpaceComponent],
  imports: [ReactiveFormsModule, TranslateModule],
  exports: [CreateSpaceComponent],
})
export class CreateSpaceModalModule {}
