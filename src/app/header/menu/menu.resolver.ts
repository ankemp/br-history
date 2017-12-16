import { Injectable } from '@angular/core';
import { ResolveStart, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import * as menuActions from '../menu/store/menu.actions';
import * as fromMenu from '../menu/store/menu.init';

import { Observable } from 'rxjs/Observable';
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
    this.store.dispatch(new menuActions.Load);
  }

  resolve(): Observable<Menu[]> {
    return this.menu$;
  }
}
