import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SpacesAccrodionComponent } from 'src/app/modules/spaces/accordion/spaces-accordion.component';

@NgModule({
  declarations: [SpacesAccrodionComponent],
  imports: [MatExpansionModule, CommonModule, MatIconModule, MatButtonModule],
  exports: [SpacesAccrodionComponent],
})
export class SpacesAccrodionModule {}
