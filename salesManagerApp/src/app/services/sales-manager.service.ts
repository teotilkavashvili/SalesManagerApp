import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SalesManagerService {
  baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  public getAllManagerss(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  public addManager(manager: any): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, manager);
  }

  public updateUserTotalIncome(userId: number, totalIncome: number) {
    return this.http.patch<User>(`${this.baseUrl}/users/${userId}`, { totalIncome });
  }

}
