import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })

export class AuthService {

  baseUrl = environment.baseUrl;
  users: User;

  constructor(
    private http: HttpClient,
    private store: Store
    ) { }

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
  public addUser(product: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/products`, product);
  }


  public login(user: string, password: string) {
    console.log("Shemovida")
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map(response => {
        const userFound = response.find(u => u.user === user && u.password === password);
        if (userFound) {
          console.log("userFound",userFound)
          return userFound;
        } 
        else {
          console.log("invalid user")
           return throwError(() => new Error(`Invalid login`));          
        }
      }),
    );
  }

  // public signIn(user: string, password: string) {
  //   return this.http.post<any>('/api/login', { user, password }).pipe(
  //     map(response => {
  //       if (response.status === 'success') {
  //         this.store.dispatch(login({ user }));
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }),
  //     catchError(() => {
  //       return of(false);
  //     })
  //   );
  // }

  public logIn(user: string, password: string) {
    return this.http.get<any[]>(`${this.baseUrl}/users`)
      .pipe(
        map(users => users.find(u => u.user === user && u.password === password))
      );
  }

}