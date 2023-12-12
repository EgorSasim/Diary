import { NgModule } from '@angular/core';
import { SidePannelComponent } from './side-pannel.component';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { CommonModule } from '@angular/common';
import { CreateSpaceModalModule } from 'src/app/modules/spaces/create-space/create-space-modal.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SpacesAccrodionModule } from 'src/app/modules/spaces/accordion/spaces-accordion.module';

@NgModule({
  declarations: [SidePannelComponent],
  imports: [
    LightboxModule,
    CommonModule,
    CreateSpaceModalModule,
    TranslateModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    SpacesAccrodionModule,
  ],
  exports: [SidePannelComponent],
})
export class SidePannelModule {}
