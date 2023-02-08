import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../sharedComponents/input/input.module';
import { ButtonModule } from '../sharedComponents/button/button.module';
import { TranslateModule } from '@ngx-translate/core'; 
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedDirectivesModule } from '../shared-directives/shared-directives.module';

const route=[{
  path: '',
  component: LogInComponent

}]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    TranslateModule,
    MatButtonModule,
    SharedDirectivesModule,
    RouterModule.forChild(route)
  ],
  declarations: [
    LogInComponent,
    LogInFormComponent
  ]
})
export class LogInModule { }
