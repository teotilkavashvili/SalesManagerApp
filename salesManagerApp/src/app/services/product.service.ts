import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  public editProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }

  public addProduct(product: any): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  public deleteProduct(productId: Product): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/products/${productId}`);
  }

}
