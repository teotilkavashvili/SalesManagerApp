import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { Product } from "src/app/interfaces/product";
import { ProductService } from "src/app/services/product.service";
import { 
  addProductFailure,
  addProductSuccess, 
  createProduct, 
  deleteProduct, 
  deleteProductError, 
  deleteProductSuccess, 
  editProduct, 
  editProductSuccess, 
  loadProductListSuccess, 
  loadProducts
} 
  from './product.actions';


@Injectable()
export class Productffects {
   createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      switchMap(({ product }) =>
        this.productService.addProduct(product).pipe(
          map(() => addProductSuccess({ product })),
          catchError(error => of(addProductFailure(error)))
        )
      )
    )
  );

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editProduct),
      switchMap(({product}) =>
        this.productService.editProduct(product).pipe(
          map(product => {
            return editProductSuccess({ product });
          }),
        )
      )
    )
  );

  //   loadProductList$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadProductList),
  //     switchMap(() =>
  //       this.productService.getAllProducts().pipe(
  //         map((products: Product[]) =>
  //           loadProductListSuccess({ products })
  //         ),
  //         catchError(error => of(loadProductListFailure(error)))
  //       )
  //     )
  //   )
  // );

  loadProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(({ userId }) =>
        this.productService.getAllProducts(userId).pipe(
          map((products: Product[]) => loadProductListSuccess({ products })),
          catchError(error => of(loadProductListSuccess(error )))
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