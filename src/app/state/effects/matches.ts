import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';

import * as matchesActions from '@app/state/actions/matches';
import * as playerActions from '@app/state/actions/players';
import { MatchService } from '@app/services';
import { Match } from '@app/models';

@Injectable()
export class MatchesEffects {
  constructor(
    private title: Title,
    private actions$: Actions,
    private api: MatchService,
  ) { }

  @Effect()
  loadMatch$: Observable<Action> = this.actions$
    .ofType(matchesActions.LOAD_MATCH)
    .pipe(
    map((action: matchesActions.LoadMatch) => action.payload),
    switchMap(matchId => this.api.get(matchId)),
    map((m: Match) => new matchesActions.LoadMatchSuccess(m))
    );

  @Effect()
  loadPlayerMatches$: Observable<Action> = this.actions$
    .ofType(playerActions.LOAD_MATCHES)
    .pipe(
    map((action: playerActions.LoadMatches) => action.payload),
    switchMap((playerId) => this.api.byPlayer(playerId)),
    map((m: Match[]) => new playerActions.LoadMatchesSuccess(m))
    );

}
