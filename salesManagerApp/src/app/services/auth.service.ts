import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { login } from '../store/login/login.actions';

@Injectable({ providedIn: 'root' })

export class AuthService {

  baseUrl = environment.baseUrl;
  users: User;
  private loggedIn = false;

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


  public loginn(user: string, password: string) {
    console.log("Shemovida")
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map(response => {
        const userFound = response.find(u => u.user === user && u.password === password);
        if (userFound) {
          localStorage.setItem('user', JSON.stringify(userFound));
          return true;
        } 
        else {
          return false      
        }
      }),
      catchError(() => {
          return of(false);
      })
    );
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  public login(user: string, password: string): Observable<any> {
    return this.http.get('http://localhost:3000/users')
      .pipe(
        map((users: any[]) => users.find(u => u.user === user && u.password === password))
      );
  }

  public logIn(user: string, password: string) {
    return this.http.get<any[]>(`${this.baseUrl}/users`)
      .pipe(
        map(users => users.find(u => u.user === user && u.password === password))
      );
  }

}