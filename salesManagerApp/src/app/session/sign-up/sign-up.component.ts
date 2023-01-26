import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() hideHeader = new EventEmitter<boolean>();
  registrationForm: FormGroup;
  submitted:boolean=false;
  notification: any = {
    errorMessage: "",
    successfully: "",
  };
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: new FormControl(null, [Validators.required, Validators.pattern("^[A-Za-z-]+$")]),
        lastName: new FormControl(null, [ Validators.required,Validators.pattern("^[A-Za-z-]+$")]),
        email: new FormControl('',[
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password: new FormControl(null, [
            Validators.required,
            Validators.minLength(6),
        ]),               
      }
    );
  }
  ngOnInit() {

  }

  onChangeValue(name, e) {
    switch (name) {
      case "first_name":
      case "last_name":
        let val = e.target.value.replace(/\s\s+/g, " ");
        this.registrationForm.patchValue({ [name]: val.trim() });
        break;
    }
  }
  onChangeFormValue(options): void {
    // this.registrationForm.get({ [options.name]: options.value });
  }
  
  onSignup(): string | void {
    this.submitted=true;
    if (this.registrationForm.valid) {
      console.log("form is valid");
    }
  }

}
