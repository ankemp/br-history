import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Entry } from 'contentful';
import { Menu } from '../../../models/menu';
import * as menuActions from './menu.actions';

import { ContentfulService } from '../../../services/contentful.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


@Injectable()
export class MenuEffects {

  constructor(
    private api: ContentfulService,
    private actions$: Actions,
  ) { }

  @Effect()
  loadMenu$: Observable<Action> = this.actions$
    .ofType(menuActions.LOAD)
    .map((action: menuActions.Load) => action.payload)
    .switchMap(() =>
      this.api.getMenuItems()
        .map((p: Entry<Menu>[]) => new menuActions.LoadSuccess(p.map(i => i.fields)))
    );

}
