import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { SalesManagerService } from "src/app/services/sales-manager.service";
import { 
  addManagerSuccess,
  CreateManager, 
  loadManagers, 
  loadManagersFailure, 
  loadManagersSuccess, 
} 
  from './managers.actions';


@Injectable()
export class managerefects {
  createManager$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateManager),
      mergeMap(action =>
        this.managerService.addManager(action.manager).pipe(
          map(manager => {
            return addManagerSuccess({ manager });
          }),
        )
      )
    )
    );

    loadManagers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadManagers),
        switchMap(() =>
          this.managerService.getAllManagerss().pipe(
            map(managers => loadManagersSuccess({ managers })),
            catchError(error => of(loadManagersFailure({ error })))
          )
        )
      )
    );

    constructor(
        private actions$: Actions, 
        private managerService: SalesManagerService
    ) {}
}