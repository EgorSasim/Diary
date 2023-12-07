import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSpaceModalComponent } from 'src/app/modules/spaces/create-space/create-space-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { InputModule } from 'src/app/modules/common/input/input.module';
@NgModule({
  declarations: [CreateSpaceModalComponent],
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    InputModule,
  ],
  exports: [CreateSpaceModalComponent],
})
export class CreateSpaceModalModule {}
