import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import * as fromPages from '@app/state/pages';
import * as pageActions from '@app/state/actions/pages';
import { Page } from '@app/models';

@Injectable()
export class PageResolver implements Resolve<Page> {
  player$: Observable<Page>;

  constructor(
    private store: Store<Page>
  ) {
    this.player$ = store.select<Page>(fromPages.getSelectedPage);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Page> {
    this.store.dispatch(new pageActions.LoadPage(route.params['pageSlug']));
    return this.player$.take(1);
  }
}
