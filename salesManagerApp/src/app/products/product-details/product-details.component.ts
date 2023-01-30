import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';
import { CreateProduct } from 'src/app/store/product/product.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() public product: Product;
  @Input() public isEditMode: boolean;

  public taskFormGroup: FormGroup;

  @Output() public updateProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private store: Store<Product>
    ) { }

  public ngOnInit(): void {
    this.taskFormGroup = this.formBuilder.group({
      id: this.product?.id,
      label: [this.product?.label, Validators.required],
      price: [this.product?.price,Validators.required],
      quantity: [this.product?.quantity,Validators.required]
    });
  }



  public saveChanges(): void {
    if (this.taskFormGroup.invalid) {
      this.taskFormGroup.markAllAsTouched();
      return;
    }

    this.product = {
      ...this.product,
      ...this.taskFormGroup.value,
      done: this.taskFormGroup.value.done ? this.product || new Date().toString() : false,
    };

    // const saveTaskMethod = this.product.id ? this.tasksService.updateTask(this.task) : this.tasksService.createTask(this.task);

    // saveTaskMethod.pipe(
    //   tap(() => {
    //     this.isEditMode = false;
    //     this.updateTask.emit(this.product);
    //   }),
    //   take(1)
    // ).subscribe();
    console.log(this.product);
    this.store.dispatch(CreateProduct({ product: this.product }));
  }

}
