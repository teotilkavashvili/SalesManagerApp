// reducers/user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { 
  addManagerSuccess,
  CreateManager,
   loadManagers,
   loadManagersFailure,
   loadManagersSuccess,
  } from './managers.actions';


export interface ManagerState {
  managers: any[];
}

const initialState: ManagerState = {
  managers: []
};

export const managerReducer = createReducer(
  initialState,

  on(CreateManager, (state, { manager }) => {
    return { ...state, managers: [...state.managers, manager] };
  }),

  on(loadManagers, state => ({ ...state })),
  on(loadManagersSuccess, (state, { managers }) => ({
    ...state,
    managers,
  })),
  on(loadManagersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state, action) {
  return managerReducer(state, action);
}


  
