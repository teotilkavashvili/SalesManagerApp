import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import { loadSoldProductsSuccess, loadSoldProductsFailure } from './sold-products.actions';
export interface SoldProductsState {
  soldProducts: any[];
}

const initialState: SoldProductsState = {
  soldProducts: []
};

export const soldProductsReducer = createReducer(
  initialState,
  on(loadSoldProductsSuccess, (state, { soldProducts }) => ({ ...state, soldProducts})),
  on(loadSoldProductsFailure, (state, { error }) => ({ ...state, error }))
);
