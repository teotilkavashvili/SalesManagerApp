import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';
import { ROUTES } from 'src/app/routes';
import { loadManagers, ManagerState, selectManagers } from 'src/app/store/managers';
// import { userState } from 'src/app/store/managers/managers.reducer';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
  managers: User[]=[];

  displayeManagersColumns: string[] = ['user', 'name', 'surName', 'date',
     'total', 'actionIcons'];
  dataManagerSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  public readonly routes: typeof ROUTES = ROUTES;

  constructor(
    private store: Store<ManagerState>
  ) { }

  ngOnInit() {
    this.getManagers();
  }

  public getManagers(){
    this.store.dispatch(loadManagers());
    this.store.select(selectManagers).subscribe(managers => {
      console.log(managers);
      this.managers = managers;
      this.dataManagerSource = new MatTableDataSource<User>(
                  this.managers
      );
      setTimeout(() => this.dataManagerSource.paginator = this.paginator);
    });
  }
  checkCards(customer){
    console.log(customer)

  }

  applyFilter(event) {
    let filterValue = event.target.value
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataManagerSource.filter = filterValue;
  }

}
