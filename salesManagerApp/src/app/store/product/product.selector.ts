import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";


const getProductState = createFeatureSelector<ProductState>('product');
export const selectProductState = (state: any) => state.product;

export const isCreated = createSelector(
  getProductState,
  (state: ProductState) => state
);

export const selectProducts = createSelector(
    selectProductState,
    (state:ProductState) => state.products
);