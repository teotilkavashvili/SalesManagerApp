import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersComponent } from './managers.component';
import { RouterModule } from '@angular/router';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { TranslateModule } from '@ngx-translate/core';

const route=[
  {
    path:'',
    component:ManagersComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule,
    TranslateModule,
    RouterModule.forChild(route)
  ],
  declarations: [
    ManagersComponent,
    ManagerListComponent,
    CreateManagerComponent]
})
export class ManagersModule { }
