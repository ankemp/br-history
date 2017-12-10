import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../../reducers/index';
import * as fromMatches from '../../matches/store/matches.init';
import * as matchesActions from '../../matches/store/matches.actions';
import { Match } from '../../models/match';

@Component({
  selector: 'brh-container',
  template: `
    <brh-match-details
    *ngIf="!!(match$ | async)"
    [match]="match$ | async">
    </brh-match-details>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public match$: Observable<Match>;
  private routeSub: Subscription;

  constructor(
    private store: Store<State>,
    private activatedRoute: ActivatedRoute
  ) {
    this.match$ = store.select<Match>(fromMatches.getSelectedMatch);
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.store.dispatch(new matchesActions.LoadMatch(params['matchId']));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
