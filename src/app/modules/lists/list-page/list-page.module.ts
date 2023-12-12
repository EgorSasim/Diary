import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { ListPageComponent } from 'src/app/modules/lists/list-page/list-page.component';
import { CreateTaskModalModule } from 'src/app/modules/tasks/create-task-modal/create-task-modal.module';

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    CreateTaskModalModule,
    LightboxModule,
    TranslateModule,
  ],
  exports: [ListPageComponent],
})
export class ListPageModule {}
