import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
  // { path: 'preview', loadChildren: () => import('./views/preview/preview.module').then(m => m.PreviewModule) },
  { path: 'account', loadChildren: () => import('./views/account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
