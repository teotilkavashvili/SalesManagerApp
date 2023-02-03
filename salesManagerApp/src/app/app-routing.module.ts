import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
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
      import('./log-in/log-in.module').then((m) => m.LogInModule),
  }, 
  {
    path: '',
    canActivate: [AuthGuard],
    component: NavigationComponent,
    children: [
      { 
        path: ROUTES.PRODUCTS, 
        loadChildren: () =>
          import('./products/products.module').then(m => m.ProductsModule), 
        canActivate: [AuthGuard], 
      },  
      { 
        path: ROUTES.MANAGERS, 
        loadChildren: () =>
          import('./managers/managers.module').then(m => m.ManagersModule), 
          canActivate: [AuthGuard],
      },
      {
        path: 'sold/:userId',
        loadChildren: () => import('./sold-products/sold-products.module').then(m => m.SoldProductsModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
