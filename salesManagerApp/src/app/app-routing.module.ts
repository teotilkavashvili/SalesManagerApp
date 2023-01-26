import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './routes';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: ROUTES.SIGNIN,
  //   pathMatch: 'full',
  // },
  // {
  //   path:ROUTES.SIGNIN,
  //   loadChildren: () =>
  //     import('./session/session.module').then((m) => m.SessionModule),
  // },
  {
    path:'',
    loadChildren: () =>
      import('./navigation/navigation.module').then((m) => m.NavigationModule),
  },
  { path: 'products', 
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule), 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
