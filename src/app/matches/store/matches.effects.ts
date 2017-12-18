import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Match } from '../../models/match';
import * as matchesActions from './matches.actions';

import { MatchService } from '../../services/match.service';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class MatchesEffects {

  constructor(
    private title: Title,
    private api: MatchService,
    private actions$: Actions,
  ) { }

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(matchesActions.LOAD_MATCH)
    .map((action: matchesActions.LoadMatch) => action.payload)
    .switchMap(matchId =>
      this.api.get(matchId)
        .map((m: Match) => new matchesActions.LoadMatchSuccess(m))
    );

  @Effect()
  loadPlayerMatches$: Observable<Action> = this.actions$
    .ofType(matchesActions.LOAD_BY_PLAYER)
    .map((action: matchesActions.LoadByPlayer) => action.payload)
    .switchMap((playerId) =>
      this.api.byPlayer(playerId)
        .map((m: Match[]) => new matchesActions.LoadByPlayerSuccess(m))
    );

  @Effect({ dispatch: false })
  setTitle: Observable<Action> = this.actions$
    .ofType(matchesActions.LOAD_MATCH_SUCCESS)
    .map((action: matchesActions.LoadMatchSuccess) => action.payload)
    .switchMap((match: Match) => {
      this.title.setTitle(`${match.matchType} - ${environment.appTitle}`);
      return Observable.of();
    });
}
