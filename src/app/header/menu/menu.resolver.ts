import { Injectable } from '@angular/core';
import { ResolveStart, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import * as menuActions from '../menu/store/menu.actions';
import * as fromMenu from '../menu/store/menu.init';
import { Menu } from '../../models/menu';

@Injectable()
export class MenuResolver implements Resolve<Menu[]> {
  private menu$: Observable<Menu[]>;

  constructor(
    private store: Store<Menu[]>
  ) {
    this.menu$ = store.select(fromMenu.getAllMenuItems);
  }

  resolveStart(): void {
  }

  resolve(): Observable<Menu[]> {
    this.store.dispatch(new menuActions.Load);
    return this.menu$.take(2);
  }
}
