// actions/product.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';

export const createProduct = createAction(
  '[Product] Create',
  props<{ product}>()
);

export const addProductSuccess = createAction(
    "[Product] Create Success",
    props<{ product }>()
);

export const addProductFailure = createAction(
    "[Product] Create Failure",
    props<{ error }>()
);

export const loadProducts = createAction(
  '[ Product] Load  Products',
  props<{ userId: string }>()
);

export const loadProductListSuccess = createAction(
  '[Product] Load List Success',
  props<{ products: Product[] }>()
);

export const loadProductListFailure = createAction(
  '[Product] Load List Failure',
  props<{ error: any }>()
);

export const editProduct = createAction(
  '[Product] Edit',
  props<{ product: Product }>()
);

export const editProductSuccess = createAction(
  "[Product] edit Success",
  props<{ product }>()
);

export const deleteProduct = createAction(
  '[Product] Delete',
  props<{ id:number }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Success',
  props<{ id }>()
);

export const deleteProductError = createAction(
  '[Product] Delete Fail',
  props<{ error: any }>()
);