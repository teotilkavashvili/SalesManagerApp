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
  quantity:number

  constructor(public dialog: MatDialog) { }

  // public readonly routes: typeof ApplicationRoutes = ApplicationRoutes;
  public ngOnInit(): void {
         
  }

  sellProduct(product): void {
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          product
      };

    this.dialog.open(ProductSellComponent, dialogConfig);
    const dialogRef = this.dialog.open(ProductSellComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: any) => {
        this.changeQuantity.emit();
      }        
    ); 

  }

}
