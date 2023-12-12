import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { TaskComponent } from 'src/app/modules/tasks/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule,
    CdkMenuModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [TaskComponent],
})
export class TaskModule {}
