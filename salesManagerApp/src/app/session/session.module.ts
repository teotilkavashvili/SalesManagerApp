import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SessionRoutingModule } from './session-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../sharedComponents/input/input.module';
import { ButtonModule } from '../sharedComponents/button/button.module';
import { TranslateModule } from '@ngx-translate/core'; 
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    TranslateModule,
    MatButtonModule
  ],
  declarations: [
    SessionComponent, 
    SignUpComponent, 
    LogInComponent
  ]
})
export class SessionModule { }
