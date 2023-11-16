import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSpaceComponent } from 'src/app/modules/common/spaces/create-space/create-space-modal.component';

@NgModule({
  declarations: [CreateSpaceComponent],
  imports: [ReactiveFormsModule],
  exports: [CreateSpaceComponent],
})
export class CreateSpaceModalModule {}
