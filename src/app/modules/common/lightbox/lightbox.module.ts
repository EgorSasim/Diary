import { NgModule } from '@angular/core';
import { LightboxComponent } from './lightbox.component';
import { LightboxService } from './lightbox.component.service';

@NgModule({
  declarations: [LightboxComponent],
  exports: [LightboxComponent],
  providers: [LightboxService],
})
export class LightboxModule {}
