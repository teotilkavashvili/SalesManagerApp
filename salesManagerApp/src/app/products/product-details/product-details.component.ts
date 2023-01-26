import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, tap } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';

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

  constructor(private readonly formBuilder: FormBuilder,) { }

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

    // this.task = {
    //   ...this.task,
    //   ...this.taskFormGroup.value,
    //   done: this.taskFormGroup.value.done ? this.task || new Date().toString() : false,
    // };

    // const saveTaskMethod = this.task.id ? this.tasksService.updateTask(this.task) : this.tasksService.createTask(this.task);

    // saveTaskMethod.pipe(
    //   tap(() => {
    //     this.isEditMode = false;
    //     this.updateTask.emit(this.task);
    //   }),
    //   take(1)
    // ).subscribe();
  }

}
