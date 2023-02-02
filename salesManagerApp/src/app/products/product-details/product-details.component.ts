import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { CreateProduct } from 'src/app/store/product/product.actions';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() public product: Product;
  @Input() public isEditMode: boolean;

  public productFormGroup: FormGroup;

  @Output() public updateProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private store: Store<Product>,
    private productService:ProductService
    ) { }

  public ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      id: this.product?.id,
      label: [this.product?.label, Validators.required],
      price: [this.product?.price,Validators.required],
      quantity: [this.product?.quantity,Validators.required]
    });
  }

  public saveChanges(): void {
    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }

    this.product = {
      ...this.product,
      ...this.productFormGroup.value,
      done: this.productFormGroup.value.done ? this.product || new Date().toString() : false,
    };
    let id=uuid()
    const saveTaskMethod = this.product.id ? this.productService.editProduct(this.product) : this.productService.addProduct(this.product);

    saveTaskMethod.pipe(
      tap(() => {
        this.isEditMode = false;
        this.updateProduct.emit(this.product);
      }),
      take(1)
    ).subscribe();
    console.log(this.product);
    this.store.dispatch(CreateProduct({ product: this.product }));
  }

}
