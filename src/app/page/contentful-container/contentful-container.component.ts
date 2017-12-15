import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import * as fromPages from '../store/pages.init';
import * as pageActions from '../store/pages.actions';
import { Page } from '../../models/page';

@Component({
  selector: 'brh-contentful-container',
  template: `<brh-content [page]="page$ | async"></brh-content>`,
  styleUrls: ['./contentful-container.component.css']
})
export class ContentfulContainerComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  public page$: Observable<Page>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<Page>
  ) {
    this.page$ = store.select<Page>(fromPages.getSelectedPage);
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.store.dispatch(new pageActions.LoadPage(params['pageSlug']));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
