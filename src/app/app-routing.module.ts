import { AdminComponent } from './pages/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
