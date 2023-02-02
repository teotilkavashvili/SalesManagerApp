import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Manager } from 'src/app/interfaces/manager';
import { HelperService } from 'src/app/services/helper.service';
import { CreateManager } from 'src/app/store/managers/managers.actions';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.scss']
})
export class CreateManagerComponent implements OnInit {

  public managerFormGroup: FormGroup;
  public manager:Manager;

  @Output() public updateManager: EventEmitter<Manager> = new EventEmitter<Manager>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private store: Store<Manager>,
    ) { }

  ngOnInit() {
    this.managerFormGroup = this.formBuilder.group({
      id: '',
      name: ['', Validators.required],
      surname: ['',Validators.required],
      user: ['',Validators.required],
      password:['',Validators.required],
      date:'',
    });
  }

  public saveChanges(): void {
    if (this.managerFormGroup.invalid) {
      this.managerFormGroup.markAllAsTouched();
      return;
    }

    this.manager = {
      ...this.manager,
      ...this.managerFormGroup.value,
      date: this.managerFormGroup.value.date =HelperService.dateFormater(new Date()),
    };

    this.updateManager.emit(this.manager);
    console.log(this.manager);
    this.store.dispatch(CreateManager({ manager: this.manager }));
  }

}
