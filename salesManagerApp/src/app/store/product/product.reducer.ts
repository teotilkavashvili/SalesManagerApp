// reducers/product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { createProduct, deleteProduct, editProduct, loadProductListSuccess } from './product.actions';

export interface ProductState {
  products: any[];
}

const initialState: ProductState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(createProduct, (state, { product }) => {
    return { ...state, products: [...state.products, product] };
  }),

  on(loadProductListSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  })),

  on(editProduct, (state, { product }) => ({
    ...state,
    products: state.products.map(p =>
      p.id === product.id ? { ...p, ...product } : p
    )
  })),
  
  on(deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter(p => p.id !== id)
  }))
);

export function reducer(state, action) {
  return productReducer(state, action);
}


  
