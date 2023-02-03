import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import { User } from 'src/app/interfaces/user';
import { SoldProductsState } from './sold-products.reducer';

export interface AppState {
    users: User[];
    products: Product[];
  }

//   const getProductsState = createFeatureSelector<AppState, Product[]>('products');

//   export const selectSoldProducts = createSelector(
//     getProductsState,
//     products => products.filter(product => product.soldQuantity > 0)
//   );

const getuserState = createFeatureSelector<SoldProductsState>('product');
export const selecSoldProductState = (state: any) => state.soldProducts;


export const getSoldProducts = createSelector(
  selecSoldProductState,
    (state:SoldProductsState) => state.soldProducts
);