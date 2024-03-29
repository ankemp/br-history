import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '@app/reducers';
import * as fromMatches from '@state/matches';
import * as matchesActions from '@state/actions/matches';
import { Match, Player } from '@app/models';

@Component({
  selector: 'brh-container',
  template: `
    <brh-match-details *ngIf="(match$ | async)" [match]="match$ | async" (viewProfile)="viewProfile($event)"></brh-match-details>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public match$: Observable<Match>;
  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<State>,
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

  viewProfile(player: Player): void {
    this.router.navigate(['/profile', player.id]);
  }

}
