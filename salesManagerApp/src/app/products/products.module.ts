import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchComponent } from './search/search.component';
import { ProductSellComponent } from './product-sell/product-sell.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    TranslateModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductComponent,
    SearchComponent,
    ProductSellComponent
  ],
  exports: [
    ProductComponent
  ],
  entryComponents: [ProductSellComponent],
})
export class ProductsModule { }
