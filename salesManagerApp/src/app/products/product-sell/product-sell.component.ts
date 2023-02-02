import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-product-sell',
  templateUrl: './product-sell.component.html',
  styleUrls: ['./product-sell.component.css']
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

  constructor(
      private formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<ProductSellComponent>,
      @Inject(MAT_DIALOG_DATA) data:any) {

      this.data = data.product
  }

  ngOnInit() {
    const length=this.data.quantity;
    console.log(length);
    console.log(this.data);
    this.form = this.formBuilder.group({
      quantity: ['', [Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.min(0), 
      Validators.max(10)]]
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
      this.dialogRef.close(this.form.value);
  
  }

  close() {
      this.dialogRef.close();
  }

}
