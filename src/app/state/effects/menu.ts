import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { switchMap, map } from 'rxjs/operators';

import * as menuActions from '@state/actions/menu';
import { Entry } from 'contentful';
import { Menu } from '@app/models';

import { ContentfulService } from '@app/services';

import { environment } from 'environments/environment';

@Injectable()
export class MenuEffects {

  constructor(
    private api: ContentfulService,
    private actions$: Actions,
  ) { }

  @Effect()
  loadMenu$: Observable<Action> = this.actions$
    .pipe(
    ofType(menuActions.LOAD),
    map((action: menuActions.Load) => action.payload),
    switchMap(() => this.api.getMenuItems()),
    map((m: Menu[]) => new menuActions.LoadSuccess(m))
    );

}
