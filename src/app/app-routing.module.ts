import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';
import { authGuard } from 'src/app/guards/authentication.guard';
import { SpacePageComponent } from 'src/app/modules/spaces/space-page/space-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'login',
    component: AuthenticationComponent,
    loadChildren: () =>
      import('../app/modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [authGuard],

    children: [
      {
        path: 'space/:id',
        component: SpacePageComponent,
        loadChildren: () =>
          import('../app/modules/spaces/space-page/space-page.module').then(
            (m) => m.SpacePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
