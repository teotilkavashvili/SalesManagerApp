import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordDirective } from './show-password/show-password.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasswordDirective],
  exports: [
    PasswordDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedDirectivesModule { }
