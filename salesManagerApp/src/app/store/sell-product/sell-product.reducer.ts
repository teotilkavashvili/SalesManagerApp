// import { createEntityAdapter, EntityState } from '@ngrx/entity';
// import { Product } from './product.model';
// import { User } from './user.model';
// import { SellProductActions, SellProductActionTypes } from './sell-product.actions';

// export interface State {
//   products: EntityState<Product>;
//   users: EntityState<User>;
// }

// export const adapter = createEntityAdapter<Product>();
// export const initialState: State = {
//   products: adapter.getInitialState(),
//   users: {}
// };

// export function reducer(state = initialState, action: SellProductActions): State {
//   switch (action.type) {
//     case SellProductActionTypes.sellProduct: {
//       const productId = action.payload.productId;
//       const soldQuantity = action.payload.soldQuantity;
//       const userId = action.payload.userId;
//       const product = state.products.entities[productId];
//       const user = state.users[userId];

//       // Update the soldQuantity field of the product
//       product.soldQuantity += soldQuantity;

//       // Update the totalIncome field of the user
//       user.totalIncome += product.price * soldQuantity;

//       return {
//         ...state,
//         products: adapter.updateOne({id: productId, changes: product}, state.products),
//         users: {...state.users, [userId]: user}
//       };
//     }

//     default:
//       return state;
//   }
// }

// export const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal,
// } = adapter.getSelectors();


import { createReducer, on } from '@ngrx/store';
import { sellProductSuccess, sellProductFailure } from './sell-product.actions';

export interface SellProductState {
  loading: boolean;
  success: any;
  error: any;
}

export const initialState: SellProductState = {
  loading: false,
  success: null,
  error: null
};

export const sellProductReducer = createReducer(
  initialState,
  on(sellProductSuccess, (state, { payload }) => ({ ...state, loading: false, success: payload })),
  on(sellProductFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
