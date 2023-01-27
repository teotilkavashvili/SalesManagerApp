import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  lang : string 

  constructor(private translateService: TranslateService) { }


  isLanguage(lang: String) {
    const defaultLang = this.translateService.defaultLang;
    const currentLanguage = this.translateService.currentLang;

    return currentLanguage ? currentLanguage == lang : defaultLang == lang;
  }


  ngOnInit() {
    console.log(localStorage.getItem('lang'));
    this.lang = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.lang);3
  }

  changeLang(event){
    const lang = event;
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
