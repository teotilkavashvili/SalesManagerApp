import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { deleteProduct, loadProducts } from 'src/app/store/product/product.actions';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/store/product/product.reducer';
import { selectProducts } from 'src/app/store/product/product.selector';
import {MatPaginator, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public selectedProduct: Product;
  public allProducts: Product[] = [];
  // products$ = this.store.select(selectProducts);
  public pageSize: number = 4;
  public pageNumber: number = 1;
  public ProductsTotalAmount = 0;
  public pageSizeOptions: number[] = [4, 20, 25];
  public userId:string

  constructor(
    private store: Store<{ products: ProductState }>
  ) { }

  @ViewChild('paginator') paginator: MatPaginator;

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}' );
    this.userId= user.id;
    this.getProduct(this.userId);

  }

  public productTrackBy(index: number, product: Product) {
    return product.id;
  }

  public editProduct(product: Product): void {
    this.selectedProduct = product;
  }

  public addProduct(): void {
    this.selectedProduct = {} as Product;
  }

  public removeProduct(id: number): void {
    this.store.dispatch(deleteProduct({ id }));
  }
  public getProduct(userId){
    this.store.dispatch(loadProducts({userId:userId}));
    // this.store.dispatch(loadProductList({page:this.pageNumber,pageSize:this.pageSize }));
    this.store.select(selectProducts).subscribe(products => {
      this.products = products;
      this.allProducts=[...products]
      this.ProductsTotalAmount=products.length;
    });
  }
  
  onSearchTask(keyword: string): void {
    this.products=this.allProducts.filter(
      products => products.label.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );    
  }

  onPageChanged(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
  }

  changeQuantity(){
    this.getProduct(this.userId);
  }
  

}
