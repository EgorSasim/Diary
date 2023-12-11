import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpacePageComponent } from 'src/app/modules/spaces/space-page/space-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { CdkMenuModule } from '@angular/cdk/menu';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { RenameListModalModule } from 'src/app/modules/lists/rename-list-modal/rename-list-modal.module';

@NgModule({
  declarations: [SpacePageComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    TranslateModule,
    MatButtonModule,
    CdkMenuModule,
    RenameListModalModule,
    LightboxModule,
  ],
  exports: [SpacePageComponent],
})
export class SpacePageModule {}
