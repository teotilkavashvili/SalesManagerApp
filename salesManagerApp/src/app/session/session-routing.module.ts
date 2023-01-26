import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SessionComponent } from './session.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { 
    path: '', 
    component: SessionComponent, 
    children: [     
      { 
        path: 'signin', 
        component: LogInComponent 
      },
      { 
        path: 'signup', 
        component: SignUpComponent 
      },
      { 
        path: '', 
        redirectTo: 'signin',
        pathMatch: 'full', 
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
