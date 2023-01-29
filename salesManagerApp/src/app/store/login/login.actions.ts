import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{user: string, password: string}>()
);

export const logout = createAction(
    '[Auth] Logout'
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{user}>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{error: string}>()
);
