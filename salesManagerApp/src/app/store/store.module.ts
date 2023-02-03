import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './login/login.reducer';
import { Loginffects } from './login/login.effects';
import { productReducer } from './product/product.reducer';
import { Productffects } from './product/product.effects';
import { managerefects } from './managers/managers.effects';
import { managerReducer } from './managers/managers.reducer';
import { sellProductReducer } from './sell-product/sell-product.reducer';
import { SellProductEffects } from './sell-product/sell-product.effects';
import { soldProductsReducer } from './sold-products/sold-products.reducer';
import { SoldProductEffects } from './sold-products/sold-products.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      login: loginReducer,
      product: productReducer,
      manager:managerReducer,
      sellProduct:sellProductReducer,
      soldProducts:soldProductsReducer,
    }),
    EffectsModule.forRoot([
      Loginffects,
      Productffects,
      managerefects,
      SellProductEffects,
      SoldProductEffects
    ]),
  ]
})
export class AuthStoreModule { }
