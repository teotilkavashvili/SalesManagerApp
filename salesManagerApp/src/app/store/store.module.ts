import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './login/login.reducer';
import { Loginffects } from './login/login.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([Loginffects])
  ]
})
export class AuthStoreModule { }
