import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { HelperService } from 'src/app/services/helper.service';
import { login } from 'src/app/store/login/login.actions';
import { isLoggedIn } from 'src/app/store/login/login.selectors';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  @Input() item:boolean=true;
  loginForm: FormGroup;
  submitted = false;

  icons: any = {
    email: "/assets/images/email-grey.svg",
    password: "/assets/images/password-grey.svg",
  };

  error: any = {
    errorMessage: "",
    email: "",
    password: "",
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
    private loginService: AuthService,
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
    this.loginForm.valueChanges.subscribe((option) => {
      if(this.submitted){
        this.checkErrors();
      }
      if (option.email && !this.error.email) {
        this.changeIcons("email", "green");
      }
      if (option.password && !this.error.password) {
        this.changeIcons("password", "green");
      }
    });
  }

  checkErrors(){
    this.error = HelperService.checkValidation(this.loginForm,{password:'Password'});
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(login({ user: this.loginForm.value.email, password: this.loginForm.value.password }));
      this.store.select(isLoggedIn).subscribe(loggedIn => {
        if (loggedIn) {
          this.router.navigate(['/products']);
        }
      });
    }
  }
  

  onLogin(): void {
    this.checkErrors();
    this.submitted = true;
    this.store.dispatch(login({ user: this.loginForm.value.email, password: this.loginForm.value.password }));
    // this.store.select(isLoggedIn).subscribe(loggedIn => {
    //   if (loggedIn) {
    //     this.router.navigate(['/products']);
    //   }else {
    //     alert('Incorrect user or password');
    //   }
    // });
    this.loginService.logIn(this.loginForm.value.email,this.loginForm.value.password ).subscribe(
      (isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/products']);
      }else {
        alert('Incorrect user or password');
      }
    });
  }

  onChangeFormValue(options:any): void {
    this.loginForm.patchValue({ [options.name]: options.value });
  }

  changeIcons(option: string, color: string): void {
    this.icons[option] = `/assets/images/${option}-${color}.svg`;
  }

  addItem(newItem) {
      this.item=newItem;
  }


}
