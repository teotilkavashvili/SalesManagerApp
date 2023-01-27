import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public selectedProduct: Product;
  public allProducts: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products=[{
      "id": 1,
      "label": "laptop",
      "price": 800,
      "quantity": 5
    },
    {
      "id": 2,
      "label": "ipod",
      "price": 300,
      "quantity": 8
    }]
  }

  public productTrackBy(index: number, product: Product) {
    return product.id;
  }

  public editProduct(Product: Product): void {
    this.selectedProduct = Product;
  }

  public addProduct(): void {
    console.log("add");
    this.selectedProduct = {} as Product;
  }

  public removeProduct(productId: number): void {
    console.log(productId);
  }
  public getProduct(){
    console.log("bla");
  }

}
