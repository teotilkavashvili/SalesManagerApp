import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { HelperService } from 'src/app/services/helper.service';
import { sellProduct } from 'src/app/store/sell-product//sell-product.actions';

@Component({
  selector: 'app-product-sell',
  templateUrl: './product-sell.component.html',
  styleUrls: ['./product-sell.component.scss']
})
export class ProductSellComponent implements OnInit {

  form: FormGroup;
  description:string;
  data:any;
  submitted:false;

  error: any = {
    errorMessage: "",
    quantity: "",
  };
  
  quantity = 0;

  constructor(
      private formBuilder: FormBuilder,
      private store: Store,
      private dialogRef: MatDialogRef<ProductSellComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

      this.data = data.product
  }

  ngOnInit() {
    const length = this.data.quantity;
    this.form = this.formBuilder.group({
      quantity: ['', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.min(0), 
      Validators.max(length)
      ]]
    });
  }
  get f() { return this.form.controls; }

  checkErrors(){
    this.error = HelperService.checkValidation(this.form,{password:'Password'});
    console.log(this.error);
  }

  save() {
    this.checkErrors();
    if (this.form.invalid) {
      return;
    } 
    const soldQuantity=this.form.controls['quantity'].value;
    const remainingAmount=this.data.quantity-soldQuantity

    this.store.dispatch(sellProduct({ 
      productId: this.data.id, 
      quantity:remainingAmount, 
      soldQuantity: soldQuantity, 
      userId: this.data.userId, 
      price: this.data.price 
    }));

    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
