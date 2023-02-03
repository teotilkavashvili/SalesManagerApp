import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldProductsComponent } from './sold-products.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { ProductsModule } from '../products/products.module';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule
  ],
  declarations: [SoldProductsComponent]
})
export class SoldProductsModule { }

