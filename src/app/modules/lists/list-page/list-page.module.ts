import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { LightboxModule } from 'src/app/modules/common/lightbox/lightbox.module';
import { ListPageComponent } from 'src/app/modules/lists/list-page/list-page.component';
import { CreateTaskModalModule } from 'src/app/modules/tasks/create-task-modal/create-task-modal.module';
import { TaskModule } from 'src/app/modules/tasks/task/task.module';

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    CreateTaskModalModule,
    LightboxModule,
    TranslateModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    TaskModule,
  ],
  exports: [ListPageComponent],
})
export class ListPageModule {}
