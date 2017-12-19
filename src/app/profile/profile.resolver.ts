import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/of';

import * as fromProfile from './store/profile.init';
import * as profileActions from './store/profile.actions';
import { Player } from '../models';

@Injectable()
export class ProfileResolver implements Resolve<Player> {
  player$: Observable<Player>;

  constructor(
    private store: Store<Player>
  ) {
    this.player$ = store.select<Player>(fromProfile.getSelectedProfile);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player> {
    this.store.dispatch(new profileActions.LoadProfile(route.params['userId']));
    return this.player$.take(2);
  }
}
