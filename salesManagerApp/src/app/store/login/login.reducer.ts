import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';
import { login, logout, loginSuccess, loginFailure } from './login.actions';

export interface LoginState {
  user: User;
  error: string;
  loggedIn: boolean;
}

export const initialState: LoginState = {
  user: null,
  error: null,
  loggedIn: false
};

// interface LoginState {
//     userFound: any;
// }
  
// const initialState: LoginState = {
//     userFound: null
// };


export const loginReducer = createReducer(
    initialState,
    on(login, (state, { user, password }) => {
        console.log(state);
        return {
            ...state,
        };
      }),
    // on(login, (state, {user, password}) => ({...state, user, password})),
    // on(login, (state, {userFound}) => {
    //     return {
    //       ...state,
    //       userFound
    //     }
    //   }),
    on(logout, state => (
        {...state, 
            user: null, 
            loggedIn: false
        })),
    on(loginSuccess, (state, {user}) => (
        {
        ...state, 
        user, 
        loggedIn: true
        }
    )),
    on(loginFailure, (state, {error}) => (
        {
            ...state, 
            error, 
            loggedIn: false
        }
    )),
  );