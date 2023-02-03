// import { createAction, props } from '@ngrx/store';


// export const sellProduct = createAction(
//   '[Sell Product] Sell Product',
//   props<{ productId: string; quantity: number; userId: string; price: number }>()
// );



// export const SellProductActions = {
//   sellProduct,
//   sellProductSuccess,
//   sellProductFailure
// };

import { createAction, props } from '@ngrx/store';

export const sellProduct = createAction(
  '[Sell Product] Sell Product',
  props<{ productId: string; quantity: number; soldQuantity:number, userId: string; price: number }>()
);

export const sellProductSuccess = createAction(
  '[Sell Product] Sell Product Success',
  props<{ payload: any }>()
);

export const sellProductFailure = createAction(
  '[Sell Product] Sell Product Failure',
  props<{ error: any }>()
);

export const SellProductActions = {
  sellProduct,
  sellProductSuccess,
  sellProductFailure
};