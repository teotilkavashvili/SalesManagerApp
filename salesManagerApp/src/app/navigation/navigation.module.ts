import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatButtonModule
  ],
  declarations: [
    NavigationComponent,
    HeaderComponent,
    SideBarComponent,
    
  ],
  exports:[
    NavigationComponent,
    HeaderComponent,
    SideBarComponent
  ]
})
export class NavigationModule { }
