// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { selectAll, State } from './sell-product.reducer';


// export const getState = createFeatureSelector<State>('sellProduct');

// export const getUsers = createSelector(
//     getState,
//     state => state.users
//   );
  
//   export const getUser = createSelector(
//     getUsers,
//     (users, props) => users[props.userId]
//   );
  
//   export const getProducts = createSelector(
//     getState,
//     state => selectAll(state.products)
//   );
  
//   export const getProduct = createSelector(
//     getProducts,
//     (products, props) => products.find(product => product.id === props.productId)
//   );

import { createSelector } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';
import { User } from 'src/app/interfaces/user';
// import { AppState } from './app.state';

export interface AppState {
  products: Product[];
  selectedProduct: Product;
  users: User[];
}

export const selectProduct = (state: AppState) => state.products;
export const selectUser = (state: AppState) => state.users;

export const selectSoldQuantity = createSelector(
  selectProduct,
  products => products.map(product => product.soldQuantity)
);

export const selectTotalIncome = createSelector(
  selectUser,
  users => users.map(user => user.totalIncome)
);
