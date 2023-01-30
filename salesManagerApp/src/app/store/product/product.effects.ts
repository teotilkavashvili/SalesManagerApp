import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects/src/actions";
import { map, mergeMap } from "rxjs/operators";
import { ProductService } from "src/app/services/product.service";
import { addProductSuccess, CreateProduct } from './product.actions';


@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

 
//   createProduct$ = this.actions$.pipe(
//     ofType<CreateProduct>(ProductActionTypes.CreateProduct),
//     mergeMap(action =>
//       this.productService.addProduct(action.payload.product).pipe(
//         map(product => new CreateProductSuccess({ product })),
//         catchError(error => of(new CreateProductFail({ error })))
//       )
//     )
//   );
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
    )
}