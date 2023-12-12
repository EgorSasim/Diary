import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { JwtInterceptor } from 'src/app/intercepters/jwt-intercepter';
import { AuthenticationModule } from 'src/app/modules/authentication/authentication.module';
import { LangSelectorModule } from 'src/app/modules/common/lang-selector/lang-selector.module';
import { HomePageModule } from 'src/app/modules/home/home-page/home-page.module';
import { SidePannelModule } from 'src/app/modules/home/side-pannel/side-pannel.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    AuthenticationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LangSelectorModule,
    BrowserAnimationsModule,
    RouterModule,
    SidePannelModule,
    HomePageModule,
    MatNativeDateModule,
    MatDatepickerModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  exports: [LangSelectorModule, RouterModule, SidePannelModule],
})
export class SharedModule {}
