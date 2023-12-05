import { NgModule } from '@angular/core';
import { SidePannelComponent } from './side-pannel.component';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { CommonModule } from '@angular/common';
import { CreateSpaceModalModule } from 'src/app/modules/spaces/create-space/create-space-modal.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SidePannelComponent],
  imports: [
    LightboxModule,
    CommonModule,
    CreateSpaceModalModule,
    TranslateModule,
  ],
  exports: [SidePannelComponent],
})
export class SidePannelModule {}
