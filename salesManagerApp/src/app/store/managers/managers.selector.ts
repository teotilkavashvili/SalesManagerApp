import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ManagerState } from "./managers.reducer";



const getuserState = createFeatureSelector<ManagerState>('manager');
export const selecManagerState = (state: any) => state.manager;

export const isCreated = createSelector(
  getuserState,
  (state: ManagerState) => state
);

export const selectManagers = createSelector(
  selecManagerState,
    (state:ManagerState) => state.managers
);
