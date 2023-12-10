import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared.module';
import { HomePageModule } from 'src/app/modules/home/home-page/home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule],
  exports: [TranslateModule],
  providers: [MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
