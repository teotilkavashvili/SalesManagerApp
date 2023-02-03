import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { loadSoldProducts, loadSoldProductsSuccess, loadSoldProductsFailure } from './sold-products.actions';

@Injectable()
export class SoldProductEffects {
  loadSoldProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSoldProducts),
      switchMap(({ userId }) =>
        this.productService.getSoldProducts(userId).pipe(
          map(soldProducts => loadSoldProductsSuccess({ soldProducts })),
          catchError(error => of(loadSoldProductsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private productService: ProductService) {}
}
