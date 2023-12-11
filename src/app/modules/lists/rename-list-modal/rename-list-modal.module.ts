import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { InputModule } from 'src/app/modules/common/input/input.module';
import { RenameListModalComponent } from 'src/app/modules/lists/rename-list-modal/rename-list-modal.component';

@NgModule({
  declarations: [RenameListModalComponent],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    InputModule,
  ],
  exports: [RenameListModalComponent],
})
export class RenameListModalModule {}
