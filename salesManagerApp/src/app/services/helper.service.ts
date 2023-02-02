import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor() { }

public static checkValidation(form: FormGroup, mapping? : any) {
  let errorObj = {};
  Object.keys(form.value).forEach((key) => {
    if (form.controls[key].errors) {
      errorObj[key] = this.onError(form.controls[key].errors);
    }
  });
  return errorObj;
}

public static onError(option: any, name?:string) {
  const field = name || 'This field'
  const key = Object.keys(option)[0];
  let error = {
    required: "This field is required. Please fill out.",
    "^[0-9]*$": "Field must be number!",
    maxlength: `Maximum ${option[key].requiredLength} letters.`,
    minlength: `${field} needs to have ${option[key].requiredLength} characters or more`,
    email: `Email format is not correct!`,
    NoPassswordMatch: "Password Does not match!",
    "^[A-Za-z-]+$": "Use only latin letters and hyphen",
    "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$":"Email format is not correct!",
    max:"it's more than total quantity"
    
  };

  if (key == "pattern") {
    return error[option[key].requiredPattern];
  }

  return error[key];
}

public static dateFormater(date: any): string {
  if (!date) return null;
  const formatedDate = new Date(date);
  const year = formatedDate.getFullYear(),
    month = formatedDate.getMonth() + 1, // months are zero indexed
    day = formatedDate.getDate(),
    hour = formatedDate.getHours(),
    minute = formatedDate.getMinutes(),
    second = formatedDate.getSeconds();

  return (
    day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second
  );
}

}
