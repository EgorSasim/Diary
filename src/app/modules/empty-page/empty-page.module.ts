import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { EmptyPageComponent } from 'src/app/modules/empty-page/empty-page.component';
import { CreateSpaceModalModule } from 'src/app/modules/spaces/create-space/create-space-modal.module';

@NgModule({
  declarations: [EmptyPageComponent],
  imports: [
    MatButtonModule,
    LightboxModule,
    CreateSpaceModalModule,
    TranslateModule,
    CommonModule,
  ],
  exports: [EmptyPageComponent],
})
export class EmptyPageModule {}
