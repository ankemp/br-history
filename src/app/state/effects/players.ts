import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { debounceTime, switchMap, map, skip, takeUntil, catchError } from 'rxjs/operators';

import * as playersActions from '@state/actions/players';
import { PlayerService } from '@app/services';
import { Player } from '@app/models';

import { environment } from 'environments/environment';

@Injectable()
export class PlayersEffects {
  constructor(
    private title: Title,
    private actions$: Actions,
    private api: PlayerService,
  ) { }

  @Effect()
  loadPlayer$: Observable<Action> = this.actions$
    .ofType(playersActions.LOAD_PLAYER)
    .pipe(
    map((action: playersActions.LoadPlayer) => action.payload),
    switchMap((playerId: string) => this.api.get(playerId)),
    map((p: Player) => new playersActions.LoadPlayerSuccess(p))
    );

  @Effect()
  loadPlayerMatches: Observable<Action> = this.actions$
    .ofType(playersActions.LOAD_PLAYER_SUCCESS)
    .pipe(
    map((action: playersActions.LoadPlayerSuccess) => action.payload),
    map((player: Player) => new playersActions.LoadMatches(player.id))
    );

  @Effect({ dispatch: false })
  setTitle$: Observable<Action> = this.actions$
    .ofType(playersActions.LOAD_PLAYER_SUCCESS)
    .pipe(
    map((action: playersActions.LoadPlayerSuccess) => action.payload),
    switchMap((player: Player) => {
      this.title.setTitle(`${player.name} - ${environment.appTitle}`);
      return empty();
    })
    );

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(playersActions.SEARCH_BY_NAME)
    .pipe(
    map((action: playersActions.SearchByName) => action.payload),
    debounceTime(400),
    switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$
        .ofType(playersActions.SEARCH_BY_NAME)
        .pipe(skip(1));

      return this.api.search(query)
        .pipe(
        takeUntil(nextSearch$),
        map((books: Player[]) => new playersActions.SearchByNameSuccess(books)),
        catchError(err => of(new playersActions.SearchByNameError(err)))
        );
    })
    );

}
