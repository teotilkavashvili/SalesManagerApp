import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { logout } from 'src/app/store/login/login.actions';
import { LoginState } from 'src/app/store/login/login.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropDown: boolean = false;
  authenticatedUser$ = this.store.select(state => state.loggedIn);
  user:any ;
  lang:string
  

  constructor(private store: Store<LoginState>,
    private translateService: TranslateService,) { }

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.lang);
  console.log(this.authenticatedUser$);
    this.store.select(state=>state.user).subscribe(
      user=>{
        this.user=user
        console.log(this.user)
      }
    )
    const user = JSON.parse(localStorage.getItem('user') || '{}' );
      this.user= user.name;
  }

  onShowDropDown(e: any): void {
    e.stopPropagation();
    this.showDropDown = !this.showDropDown;
  }
  signOut(){
    this.store.dispatch(logout());
    this.showDropDown = !this.showDropDown;
  }

  changeLang(event){
    const lang = event;
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
