import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { ProductSellComponent } from '../product-sell/product-sell.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
  @Input() public product: Product;
  @Output() public editProduct: EventEmitter<void> = new EventEmitter<void>();
  @Output() public changeQuantity: EventEmitter<void> = new EventEmitter<void>();
  @Output() public removeProduct: EventEmitter<void> = new EventEmitter<void>();
  public quantity:number

  constructor(
    public dialog: MatDialog,
  ) { }

  // public readonly routes: typeof ApplicationRoutes = ApplicationRoutes;
  public ngOnInit(): void {
         
  }
  sellProduct(product): void {
    const dialogRef = this.dialog.open(ProductSellComponent, {
      width: '250px',
      data: product,
    });
    dialogRef
      .afterClosed()
      .subscribe(() => {
        console.log("gaiyida")
        this.changeQuantity.emit();
      });
  }

}
