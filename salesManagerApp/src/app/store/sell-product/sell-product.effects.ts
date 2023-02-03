import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { ProductService } from "src/app/services/product.service";
import { SalesManagerService } from 'src/app/services/sales-manager.service';
import { sellProduct, sellProductFailure, sellProductSuccess } from './sell-product.actions';


@Injectable()
export class SellProductEffects {
  // sellProduct$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SellProductActionTypes.sellProduct),
  //     mergeMap(action => {
  //       return this.productService.sellProduct(action.productId, action.soldQuantity).pipe(
  //         mergeMap(() => {
  //           return this.userService.updateUserTotalIncome(action.userId, action.soldQuantity * action.product.price).pipe(
  //             map(() => {
  //               return SellProductActions({
  //                 productId: action.payload.productId,
  //                 soldQuantity: action.payload.soldQuantity,
  //                 userId: action.payload.userId
  //               });
  //             }),
  //             catchError(() => {
  //               return of();
  //             })
  //           );
  //         }),
  //         catchError(() => {
  //           return of();
  //         })
  //       );
  //     })
  //   )
  // );


    sellProduct$ = createEffect(() =>
      this.actions$.pipe(
        ofType(sellProduct),
        mergeMap(({ productId, quantity, soldQuantity, userId, price}) =>
          this.productService.sellProduct(productId, quantity, soldQuantity, userId, price).pipe(
            map(payload => {
              return sellProductSuccess({ payload });
            }),
            catchError(error => of(sellProductFailure({ error })))
          )
        )
      )
    );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private productService: ProductService,
    private userService: SalesManagerService
  ) {}
}
