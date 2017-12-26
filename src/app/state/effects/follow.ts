import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';

import * as followActions from '@app/state/actions/follow';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';
import { map, switchMap, mergeMap, toArray } from 'rxjs/operators';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private db: Database
  ) { }

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('battlelegend_battlerite');
  });

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(followActions.LOAD)
    .pipe(
    switchMap(() => this.db.query('follows')),
    toArray(),
    map(((follows: any[]) => new followActions.LoadSuccess(follows)))
    );

  @Effect()
  add$: Observable<Action> = this.actions$
    .ofType(followActions.ADD)
    .pipe(
    map((action: followActions.Add) => action.payload),
    mergeMap(follow => this.db.insert('follows', [follow])),
    map((follow: any) => new followActions.AddSuccess(follow))
    );

  @Effect()
  remove$: Observable<Action> = this.actions$
    .ofType(followActions.REMOVE)
    .pipe(
    map((action: followActions.Remove) => action.payload),
    mergeMap(id => this.db.executeWrite('follows', 'delete', [id])),
    map((id: string) => new followActions.RemoveSuccess(id))
    );
}
