import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { Product } from "src/app/interfaces/product";
import { ProductService } from "src/app/services/product.service";
import { 
  addProductSuccess, 
  CreateProduct, 
  deleteProduct, 
  deleteProductError, 
  deleteProductSuccess, 
  editProduct, 
  editProductSuccess, 
  loadProductList, 
  loadProductListFailure, 
  loadProductListSuccess 
} 
  from './product.actions';


@Injectable()
export class Productffects {
  createProduct$ = 
    this.actions$.pipe(
      ofType(CreateProduct),
      mergeMap(action =>
        this.productService.addProduct(action).pipe(
          map(product => {
            return addProductSuccess({ product });
          }),
        )
      )
    );

    editProduct$ = 
    this.actions$.pipe(
      ofType(editProduct),
      mergeMap(product =>
        this.productService.editProduct(product).pipe(
          map(product => {
            return editProductSuccess({ product });
          }),
        )
      )
    );

    loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductList),
      switchMap(() =>
        this.productService.getAllProducts().pipe(
          map((products: Product[]) =>
            loadProductListSuccess({ products })
          ),
          catchError(error => of(loadProductListFailure(error)))
        )
      )
    )
  );
    
    deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      switchMap(({ id }) =>
        this.productService.deleteProduct(id).pipe(
          map(() => deleteProductSuccess({ id })),
          catchError(error => of(deleteProductError(error)))
        )
      )
    )
  );

    constructor(
        private actions$: Actions, 
        private productService: ProductService
    ) {}
}