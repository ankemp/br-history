import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Player } from '../../models';
import * as profileActions from './profile.actions';

import { PlayerService } from '../../services/player.service';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ProfileEffects {

  constructor(
    private title: Title,
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

  @Effect({ dispatch: false })
  setTitle: Observable<Action> = this.actions$
    .ofType(profileActions.LOAD_PROFILE_SUCCESS)
    .map((action: profileActions.LoadProfileSuccess) => action.payload)
    .switchMap((player: Player) => {
      this.title.setTitle(`${player.name} - ${environment.appTitle}`);
      return Observable.of();
    });

}
