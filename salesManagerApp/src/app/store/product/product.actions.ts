// actions/product.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';

export const CreateProduct = createAction(
  '[Product] Create',
  props<{ product}>()
);

export const addProductSuccess = createAction(
    "[Banner] Create Success",
    props<{ product }>()
);

export const addProductFailure = createAction(
    "[Banner] Create Failure",
    props<{ error }>()
);

export const loadProductList = createAction(
  '[Product] Load List'
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
  "[Banner] edit Success",
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