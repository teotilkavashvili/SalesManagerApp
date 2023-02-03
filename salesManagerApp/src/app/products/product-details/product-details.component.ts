import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { createProduct, deleteProduct, editProduct } from 'src/app/store/product/product.actions';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() public product: Product;
  @Input() public isEditMode: boolean;
  public userId:number;
  public isEdit :boolean=false

  public productFormGroup: FormGroup;

  @Output() public updateProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private store: Store<Product>,
    ) { }

  public ngOnInit(): void {
    if(this.product.id){
      this.isEdit=true;
    }
    this.productFormGroup = this.formBuilder.group({
      id: this.product?.id,
      label: [this.product?.label, 
        [
        Validators.required,
        Validators.pattern(/^([a-zA-Z]+|[\u10D0-\u10F0]+)$/),
        ]
      ],
      price: [this.product?.price,
        [
        Validators.required,
        Validators.pattern("^[0-9]*$")
        ]
      ],
      quantity: [this.product?.quantity,
        [
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]
      ], 
      soldQuantity: this.product?.soldQuantity,
    });

    const user = JSON.parse(localStorage.getItem('user') || '{}' );
      this.userId=user.id
  }

  public saveChanges(): void {
    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }
    let uniqueId=uuid()
    let newId=this.product.id? this.product.id : uniqueId
    this.product = {
      ...this.product,
      ...this.productFormGroup.value,
      userId:this.userId,
      id:newId
    };

    const saveTaskMethod = this.isEdit ? 
    this.store.dispatch(editProduct({ product: this.product })) : 
    this.store.dispatch(createProduct({ product: this.product }));
    this.isEditMode = false;
    this.updateProduct.emit(this.product);

  }

}
