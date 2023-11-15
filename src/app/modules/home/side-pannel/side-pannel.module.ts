import { NgModule } from '@angular/core';
import { SidePannelComponent } from './side-pannel.component';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { CommonModule } from '@angular/common';
import { CreateSpaceModule } from 'src/app/modules/common/space/create-space/create-space-modal.module';

@NgModule({
  declarations: [SidePannelComponent],
  imports: [LightboxModule, CommonModule, CreateSpaceModule],
  exports: [SidePannelComponent],
})
export class SidePannelModule {}
