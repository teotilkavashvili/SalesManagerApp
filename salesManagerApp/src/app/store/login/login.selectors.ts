import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

const getLoginState = createFeatureSelector<LoginState>('login');

export const isLoggedIn = createSelector(
  getLoginState,
  (state: LoginState) => state.loggedIn
);

export const getUser = createSelector(
    getLoginState,
  (state: LoginState) => state.user
);


export const getError = createSelector(
    getLoginState,
  (state: LoginState) => state.error
);

export const selectUserFound = createSelector(
    getLoginState,
    (state: LoginState) => state.loggedIn
  );