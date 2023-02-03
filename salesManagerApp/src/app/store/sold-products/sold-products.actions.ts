import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';

export const loadSoldProducts = createAction(
  '[Sold Product] Load Sold Products',
  props<{ userId: string }>()
);

export const loadSoldProductsSuccess = createAction(
  '[Sold Product] Load Sold Products Success',
  props<{ soldProducts: Product[] }>()
);

export const loadSoldProductsFailure = createAction(
  '[Sold Product] Load Sold Products Failure',
  props<{ error: any }>()
);
