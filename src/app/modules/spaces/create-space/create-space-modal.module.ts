import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSpaceModalComponent } from 'src/app/modules/spaces/create-space/create-space-modal.component';

@NgModule({
  declarations: [CreateSpaceModalComponent],
  imports: [ReactiveFormsModule, TranslateModule],
  exports: [CreateSpaceModalComponent],
})
export class CreateSpaceModalModule {}
