import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';

import 'rxjs/add/operator/toArray';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';
import { map, switchMap, mergeMap } from 'rxjs/operators';

import * as followActions from '@state/actions/follow';
import { Player } from '@app/models';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private db: Database
  ) { }

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() =>
    this.db.open('battlelegend_battlerite')
  );

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(followActions.LOAD)
    .pipe(
    switchMap(() =>
      this.db.query('follow')
        .toArray()
        .map((follows: any[]) => new followActions.LoadSuccess(follows))
    ));

  @Effect()
  add$: Observable<Action> = this.actions$
    .ofType(followActions.ADD)
    .pipe(
    map((action: followActions.Add) => action.payload),
    mergeMap(({ id, name }) => this.db.insert('follow', [{ id, name }])),
    map(({ id }) => new followActions.AddSuccess(id))
    );

  @Effect()
  remove$: Observable<Action> = this.actions$
    .ofType(followActions.REMOVE)
    .pipe(
    map((action: followActions.Remove) => action.payload),
    mergeMap(({ id, name }) => this.db.executeWrite('follow', 'delete', [{ id, name }])),
    map(({ id }) => new followActions.RemoveSuccess(id))
    );
}
