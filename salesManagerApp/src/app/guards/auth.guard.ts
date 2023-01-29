import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { isLoggedIn, selectUserFound } from '../store/login/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {}

  canActivate() {
    return this.store.select(isLoggedIn).pipe(      
      map(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }),
      tap(res=>{
        console.log("res ", res);
      }),
    );
  }
}