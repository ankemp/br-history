import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError, retry } from 'rxjs/operators';

import * as matchesActions from '@state/actions/matches';
import * as playerActions from '@state/actions/players';
import * as telemetryActions from '@state/actions/telemetry';
import { MatchService } from '@app/services';
import { Match, Telemetry } from '@app/models';

@Injectable()
export class MatchesEffects {
  constructor(
    private title: Title,
    private actions$: Actions,
    private api: MatchService,
  ) { }

  @Effect()
  loadMatch$: Observable<Action> = this.actions$
    .pipe(
    ofType(matchesActions.LOAD_MATCH),
    map((action: matchesActions.LoadMatch) => action.payload),
    switchMap(matchId => this.api.get(matchId)),
    map((m: Match) => new matchesActions.LoadMatchSuccess(m))
    );

  @Effect()
  loadMatchTelemetry$: Observable<Action> = this.actions$
    .pipe(
    ofType(matchesActions.LOAD_TELEMETRY),
    map((action: matchesActions.LoadTelemetry) => action.payload),
    switchMap((matchId) => this.api.getTelemetry(matchId)),
    map((t: Telemetry[]) => new matchesActions.LoadTelemetrySuccess(t)),
  );

  @Effect()
  loadRoundStats$: Observable<Action> = this.actions$
    .pipe(
    ofType(matchesActions.LOAD_TELEMETRY_SUCCESS),
    map((action: telemetryActions.LoadRoundStats) => action),
    map(() => new telemetryActions.LoadRoundStats)
    );

  @Effect()
  loadPlayerMatches$: Observable<Action> = this.actions$
    .pipe(
    ofType(playerActions.LOAD_MATCHES),
    map((action: playerActions.LoadMatches) => action.payload),
    switchMap((playerId) => this.api.byPlayer(playerId)),
    map((m: Match[]) => new playerActions.LoadMatchesSuccess(m)),
    // retry(2),
    catchError((error) => of(new playerActions.LoadMatchesError(error)))
    );

}
