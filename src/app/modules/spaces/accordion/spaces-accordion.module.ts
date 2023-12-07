import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { SpacesAccrodionComponent } from 'src/app/modules/spaces/accordion/spaces-accordion.component';

@NgModule({
  declarations: [SpacesAccrodionComponent],
  imports: [MatExpansionModule, CommonModule],
  exports: [SpacesAccrodionComponent],
})
export class SpacesAccrodionModule {}
