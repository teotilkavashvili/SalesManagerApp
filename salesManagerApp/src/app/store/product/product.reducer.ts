// reducers/product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { CreateProduct } from './product.actions';

export interface ProductState {
  products: any[];
}

const initialState: ProductState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(CreateProduct, (state, { product }) => {
    return { ...state, products: [...state.products, product] };
  })
);

export function reducer(state, action) {
  return productReducer(state, action);
}
