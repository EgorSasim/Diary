import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () =>
      import('../app/modules/home/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
