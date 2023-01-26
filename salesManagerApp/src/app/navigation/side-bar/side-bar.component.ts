import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  public openUrl: string;
  public activeUrl: string;
  private unsubscribe$ = new Subject<void>();
  
  constructor(
    private router: Router,
  ) {
    this.router.events
      .pipe(
 
        takeUntil(this.unsubscribe$),
        filter((event) => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => (this.activeUrl = event.url)),
        tap((event: NavigationEnd) => (this.openUrl = "")),
      )
      .subscribe(
        (x =>  (this.activeUrl = x.urlAfterRedirects)) 
      );

   }

  ngOnInit() {
  }


}
