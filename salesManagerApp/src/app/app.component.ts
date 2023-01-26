import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SalesManagerApplication';
  loadingSpinner: Observable<boolean> = of(false);

  constructor(
    private translateService: TranslateService,
    )
  {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem( 'lang' ) || 'en');
  }
}
