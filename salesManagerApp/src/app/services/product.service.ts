import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  public getAllProducts(userId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?userId=${userId}`);

  }

  // public getAllProducts(page,pageSize): Observable<Product[]> {
  //   console.log("shemovidaaaa");
  //   return this.http.get<Product[]>(`${this.baseUrl}/products?_page=${page}&_limit=${pageSize}`);
  // }

  public editProduct(product: any): Observable<Product> {
    return this.http.patch<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }

  public addProduct(product: any): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product)
  }

  public deleteProduct(productId:any): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/products/${productId}`);
  }

  public sellProduct(productId: string, quantity: number, soldQuantity: number, userId: string, price: number): Observable<Product> {
    return new Observable(observer => {
      this.updateProductQuantity(productId, quantity, soldQuantity,price).subscribe(product => {
        this.updateUserTotalIncome(userId,soldQuantity, price).subscribe(user => {
        });
      });
    });
  }

  public updateProductQuantity(productId: string, quantity: number, soldQuantity: number, price:number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${productId}`).pipe(
      switchMap(product=>{
        const sumSoldQuantities = Number(product.soldQuantity) + Number(soldQuantity);
        return this.http.patch<Product>(`${this.baseUrl}/products/${productId}`,{
          quantity: quantity, soldQuantity:sumSoldQuantities
        })
      })      
    );
  }
  
  public updateUserTotalIncome(userId: string, soldQuantity: number, price: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`).pipe(
        switchMap(user=>{
          const income = Number(price) * Number(soldQuantity);
          const totalIncome = user.totalIncome  + income ;
          return this.http.patch<User>(`${this.baseUrl}/users/${userId}`, {totalIncome: totalIncome}
          )
        })      
      );
  }

  public getSoldProducts(userId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products?userId=${userId}`);
  }

}
