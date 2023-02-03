import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../interfaces/product';
import { ROUTES } from '../routes';
import { loadSoldProducts } from '../store/sold-products/sold-products.actions';
import { AppState, getSoldProducts } from '../store/sold-products/sold-products.selector';

@Component({
  selector: 'app-sold-products',
  templateUrl: './sold-products.component.html',
  styleUrls: ['./sold-products.component.scss']
})
export class SoldProductsComponent implements OnInit {
  public product: Product;
  public products: Product[] = [];
  public readonly routes: typeof ROUTES = ROUTES;

  constructor(
    private readonly route: ActivatedRoute,
    public readonly router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    const id:any = +this.route.snapshot.paramMap.get('userId');
    console.log(id);
    console.log("sold component")
    this.store.dispatch(loadSoldProducts({userId:id}));
    this.store.select(getSoldProducts).subscribe(Products => {
      this.products=Products.filter(product => product.soldQuantity > 0);
      console.log(Products),
      console.log(this.products);
      // this.router.navigate(['/sold'])
    });
  }

}
