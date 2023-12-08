import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { InputModule } from 'src/app/modules/common/input/input.module';
import { RenameSpaceModalComponent } from 'src/app/modules/spaces/rename-space-modal/rename-space-modal.component';
@NgModule({
  declarations: [RenameSpaceModalComponent],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    InputModule,
  ],
  exports: [RenameSpaceModalComponent],
})
export class RenameSpaceModalModule {}
