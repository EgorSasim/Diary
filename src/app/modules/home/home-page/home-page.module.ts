import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { SidePannelModule } from '../side-pannel/side-pannel.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent],
  imports: [SidePannelModule, RouterModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
