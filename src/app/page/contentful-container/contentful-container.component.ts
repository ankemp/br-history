import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import * as fromPages from '../store/pages.init';
import * as pageActions from '../store/pages.actions';
import { Page } from '../../models';

@Component({
  selector: 'brh-contentful-container',
  template: `<brh-content [page]="page$ | async"></brh-content>`,
  styleUrls: ['./contentful-container.component.css']
})
export class ContentfulContainerComponent {
  private routeSub: Subscription;
  public page$: Observable<Page>;

  constructor(
    private store: Store<Page>
  ) {
    this.page$ = store.select<Page>(fromPages.getSelectedPage);
  }

}
