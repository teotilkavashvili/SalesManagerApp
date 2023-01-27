import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input() public product: Product;
  @Output() public editProduct: EventEmitter<void> = new EventEmitter<void>();
  @Output() public changeStatus: EventEmitter<void> = new EventEmitter<void>();
  @Output() public removeProduct: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  // public readonly routes: typeof ApplicationRoutes = ApplicationRoutes;
  public ngOnInit(): void {
         
  }

}
