import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersComponent } from './managers.component';
import { RouterModule } from '@angular/router';

const route=[
  {
    path:'',
    component:ManagersComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [ManagersComponent]
})
export class ManagersModule { }
