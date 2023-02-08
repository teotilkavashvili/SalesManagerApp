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
  public manager: Manager;
  public submitted: boolean = false;

  error: any = {
    errorMessage: "",
    user: "",
    password: "",
    name: "",
    surname: ""
  };

  @Output() public updateManager: EventEmitter<Manager> = new EventEmitter<Manager>();

  constructor(
    private readonly formBuilder: FormBuilder,
    private store: Store<Manager>,
    ) { }
    

  ngOnInit() {
    this.managerFormGroup = this.formBuilder.group({
      id: '',
      name: ['', [
        Validators.required,
        Validators.pattern('^[A-Za-z-]+$')
      ]],
      surname: ['',[
        Validators.required,
        Validators.pattern('^[A-Za-z-]+$')
      ]],
      user: ['',
      [
        Validators.required,
        Validators.email
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(6)
      ]],
      date:'',
    });
    this.managerFormGroup.valueChanges.subscribe((option) => {
      if(this.submitted){
        this.checkErrors();
      }
    })
  }

  checkErrors(){
    this.error = HelperService.checkValidation(this.managerFormGroup);
  }

  public saveChanges(): void {
    this.submitted=true;
    this.checkErrors();
    if (this.managerFormGroup.invalid) {
      this.managerFormGroup.markAllAsTouched();
      return;
    }

    this.manager = {
      ...this.manager,
      ...this.managerFormGroup.value,
      date: this.managerFormGroup.value.date =HelperService.dateFormater(new Date()),
      totalIncome:0
    };

    this.updateManager.emit(this.manager);
    this.store.dispatch(CreateManager({ manager: this.manager }));
  }

}
