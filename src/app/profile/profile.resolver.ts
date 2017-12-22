import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import * as fromProfile from '@app/state/profile';
import * as playersActions from '@app/state/actions/players';
import { Player } from '@app/models';

@Injectable()
export class ProfileResolver implements Resolve<Player> {
  player$: Observable<Player>;

  constructor(
    private store: Store<Player>
  ) {
    this.player$ = store.select<Player>(fromProfile.getSelectedProfile);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Player> {
    this.store.dispatch(new playersActions.LoadPlayer(route.params['userId']));
    return this.player$.take(1);
  }
}
