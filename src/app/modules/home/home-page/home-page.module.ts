import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { SidePannelModule } from '../side-pannel/side-pannel.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [SidePannelModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
