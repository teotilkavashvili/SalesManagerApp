import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  @Input() item:boolean=true;
  loginForm: FormGroup;
  submitted = false;

  error: any = {
    errorMessage: "",
    email: "",
    password: "",
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {
    console.log(this.router.url);   
    this.loginForm.valueChanges.subscribe((option) => {
      if(this.submitted){
        this.checkErrors();
      }
    });
  }

  checkErrors(){
      
  }

  onLogin(): void {
    this.checkErrors();
    this.submitted = true;
  }

  onChangeFormValue(options:any): void {
    this.loginForm.patchValue({ [options.name]: options.value });
  }


  addItem(newItem) {
      this.item=newItem;
    }


}
