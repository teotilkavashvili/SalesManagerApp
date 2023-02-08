import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/user';
import { selectManagers } from '../store/managers';
import { loadManagers } from '../store/managers/managers.actions';
import { ManagerState } from '../store/managers/managers.reducer';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {
  manager:User;
  public managers: User[] = [];

  constructor(
    private store: Store<ManagerState>
  ) { }

  ngOnInit() {
  }

  public addManager(): void {
    this.manager = {} as User;
  }
  
  public getManagers(){
    this.manager=null
  }

}
