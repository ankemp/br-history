import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Entry } from 'contentful';
import { Page } from '../../models';
import * as pageActions from './pages.actions';

import { ContentfulService } from '../../services/contentful.service';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class PagesEffects {

  constructor(
    private title: Title,
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

  @Effect({ dispatch: false })
  setTitle: Observable<Action> = this.actions$
    .ofType(pageActions.LOAD_PAGE_SUCCESS)
    .map((action: pageActions.LoadPageSuccess) => action.payload)
    .switchMap((page: Page) => {
      this.title.setTitle(`${page.title} - ${environment.appTitle}`);
      return Observable.of();
    });

}
