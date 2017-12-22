import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as menuActions from '@state/actions/menu';
import * as fromMenu from '@state/menu';
import { Menu } from '@app/models';

@Component({
  selector: 'brh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu$: Observable<Menu[]>;

  constructor(
    private store: Store<Menu[]>
  ) {
    this.menu$ = store.select(fromMenu.getAllMenuItems);
  }

  ngOnInit() {
    this.store.dispatch(new menuActions.Load);
  }

}
