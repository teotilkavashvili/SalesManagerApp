// actions/product.actions.ts
import { createAction, props } from '@ngrx/store';

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