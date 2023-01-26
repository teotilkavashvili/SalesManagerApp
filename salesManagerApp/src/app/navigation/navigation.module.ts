import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { NavigationRoutingModule } from './navigation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationRoutingModule
  ],
  declarations: [
    NavigationComponent,
    HeaderComponent,
    SideBarComponent
  ]
})
export class NavigationModule { }
