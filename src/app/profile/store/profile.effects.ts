import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Player } from '../../models/player';
import * as profileActions from './profile.actions';

import { PlayerService } from '../../services/player.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileEffects {

  constructor(
    private api: PlayerService,
    private actions$: Actions,
  ) { }

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(profileActions.LOAD_PROFILE)
    .map((action: profileActions.LoadProfile) => action.payload)
    .switchMap((playerId: string) =>
      this.api.get(playerId)
        .map((p: Player) => new profileActions.LoadProfileSuccess(p))
    );

}
