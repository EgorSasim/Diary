import { NgModule } from '@angular/core';
import { CreateListModalComponent } from 'src/app/modules/lists/create-list/create-list-modal.component';
4;
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InputModule } from 'src/app/modules/common/input/input.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreateListModalComponent],
  imports: [
    MatCardModule,
    MatIconModule,
    InputModule,
    TranslateModule,
    MatButtonModule,
  ],
  exports: [CreateListModalComponent],
})
export class CreateListModalModule {}
