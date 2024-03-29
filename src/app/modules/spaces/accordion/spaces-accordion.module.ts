import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { SpacesAccrodionComponent } from 'src/app/modules/spaces/accordion/spaces-accordion.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { RenameSpaceModalModule } from 'src/app/modules/spaces/rename-space-modal/rename-space-modal.module';
import { CreateListModalModule } from 'src/app/modules/lists/create-list/create-list-modal.module';
import { RouterModule } from '@angular/router';
import { NoteCreateModalModule } from 'src/app/modules/notes/create/note-create-modal.module';

@NgModule({
  declarations: [SpacesAccrodionComponent],
  imports: [
    MatExpansionModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    CdkMenuModule,
    MatDividerModule,
    MatListModule,
    TranslateModule,
    LightboxModule,
    RenameSpaceModalModule,
    CreateListModalModule,
    RouterModule,
    NoteCreateModalModule,
  ],
  exports: [SpacesAccrodionComponent],
})
export class SpacesAccrodionModule {}
