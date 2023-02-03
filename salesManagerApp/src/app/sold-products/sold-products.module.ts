import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldProductsComponent } from './sold-products.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { ProductsModule } from '../products/products.module';

const routes=[
  {
    path:'',
    component: SoldProductsComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // ProductsModule,
    MatButtonModule,
  ],
  declarations: [SoldProductsComponent]
})
export class SoldProductsModule { }

