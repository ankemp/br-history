import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { switchMap, map } from 'rxjs/operators';

import * as pagesActions from '@app/state/actions/pages';
import { Entry } from 'contentful';
import { Page } from '@app/models';

import { ContentfulService } from '@app/services/contentful.service';

import { environment } from 'environments/environment';


@Injectable()
export class PagesEffects {

  constructor(
    private title: Title,
    private actions$: Actions,
    private api: ContentfulService,
  ) { }

  @Effect()
  loadPage$: Observable<Action> = this.actions$
    .ofType(pagesActions.LOAD_PAGE)
    .pipe(
    map((action: pagesActions.LoadPage) => action.payload),
    switchMap((pageSlug: string) => this.api.getBySlug(pageSlug)),
    map((p: Entry<Page>) => new pagesActions.LoadPageSuccess(p.fields))
    );

  @Effect({ dispatch: false })
  setTitle: Observable<Action> = this.actions$
    .ofType(pagesActions.LOAD_PAGE_SUCCESS)
    .pipe(
    map((action: pagesActions.LoadPageSuccess) => action.payload),
    switchMap((page: Page) => {
      this.title.setTitle(`${page.title} - ${environment.appTitle}`);
      return empty();
    })
    );

}
