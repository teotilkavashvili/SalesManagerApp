import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginFailure, logout } from './login.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class Loginffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(action =>
        this.loginService.login(action.user, action.password).pipe(
          map(res => {
            if(res){
              return  loginSuccess({user:res});
            }else{
              return  loginFailure({error:"Invalid username or password"});
            }          
          }),
          tap(res=>{
            if(res){
                // localStorage.setItem('authToke', res['user']);
            }
          }),
          catchError(error =>
             of(loginFailure({error}))
          )
        )
      )
    )
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.router.navigate(["/login"]);
          localStorage.removeItem('user');
        })
      ),
    { dispatch: false }
  );
    

  constructor(
    private actions$: Actions, 
    private loginService: AuthService,
    private router:Router
    ) {}
}
