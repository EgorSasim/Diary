import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { AuthenticationComponent } from 'src/app/modules/authentication/authentication.component';
import { authGuard } from 'src/app/guards/authentication.guard';
import { SpacePageComponent } from 'src/app/modules/spaces/space-page/space-page.component';
import { EmptyPageComponent } from 'src/app/modules/empty-page/empty-page.component';
import { ListPageComponent } from 'src/app/modules/lists/list-page/list-page.component';

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
    canActivateChild: [authGuard],

    children: [
      {
        path: 'empty-page',
        component: EmptyPageComponent,
        loadChildren: () =>
          import('../app/modules/empty-page/empty-page.module').then(
            (m) => m.EmptyPageModule
          ),
      },
      {
        path: 'space/:id',
        component: SpacePageComponent,
        loadChildren: () =>
          import('../app/modules/spaces/space-page/space-page.module').then(
            (m) => m.SpacePageModule
          ),
      },
      {
        path: 'space/:id/list/:listId',
        component: ListPageComponent,
        loadChildren: () =>
          import('../app/modules/lists/list-page/list-page.module').then(
            (m) => m.ListPageModule
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
