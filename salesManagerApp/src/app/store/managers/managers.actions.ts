// actions/user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';

export const CreateManager = createAction(
  '[Product] Create',
  props<{ manager}>()
);

export const addManagerSuccess = createAction(
    "[Banner] Create Success",
    props<{ manager }>()
);

export const addManagerFailure = createAction(
    "[Banner] Create Failure",
    props<{ error }>()
);

export const loadManagers = createAction(
  '[Manager] Load Managers'
);

export const loadManagersSuccess = createAction(
  '[Manager] Load Managers Success',
  props<{ managers: User[] }>()
);

export const loadManagersFailure = createAction(
  '[Manager] Load Managers Failure',
  props<{ error: any }>()
);