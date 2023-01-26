import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.SIGNIN,
    pathMatch: 'full',
  },
  {
    path:ROUTES.SIGNIN,
    loadChildren: () =>
      import('./session/session.module').then((m) => m.SessionModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
