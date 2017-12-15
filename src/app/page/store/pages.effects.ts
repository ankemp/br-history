import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Entry } from 'contentful';
import { Page } from '../../models/page';
import * as pageActions from './pages.actions';

import { ContentfulService } from '../contentful.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


@Injectable()
export class PagesEffects {

  constructor(
    private api: ContentfulService,
    private actions$: Actions,
  ) { }

  @Effect()
  loadPage$: Observable<Action> = this.actions$
    .ofType(pageActions.LOAD_PAGE)
    .map((action: pageActions.LoadPage) => action.payload)
    .switchMap((pageSlug: string) =>
      this.api.getBySlug(pageSlug)
        .map((p: Entry<Page>) => new pageActions.LoadPageSuccess(p.fields))
    );

}
