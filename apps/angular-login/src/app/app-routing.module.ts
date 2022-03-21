import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard], //Private Page
    loadChildren: () => import('./pages/page.module').then((m) => m.PageModule)
  },
  {
    path: 'auth', //public Page
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
