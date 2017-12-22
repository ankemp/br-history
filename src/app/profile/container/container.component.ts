import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '@app/reducers';
import * as fromProfile from '@app/state/profile';
import * as playersActions from '@app/state/actions/players';
import * as matchesActions from '@app/state/actions/matches';
import { Match, Player } from '@app/models';

@Component({
  selector: 'brh-container',
  template: `
    <brh-header *ngIf="(player$ | async)" [player]="player$ | async"></brh-header>
    <brh-tabs
    *ngIf="(history$ | async) && (player$ | async)"
    (matchSelected)="selectMatch($event)"
    (viewProfile)="viewProfile($event)"
    (openMatch)="openMatch($event)"
    (tabChange)="tabChange($event)"
    [player]="player$ | async"
    [matches]="history$ | async"
    [match]="selectedMatch$ | async">
    </brh-tabs>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public history$: Observable<Match[]>;
  public selectedMatch$: Observable<Match>;
  public player$: Observable<Player>;
  private routeSub: Subscription;

  constructor(
    private store: Store<State>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.selectedMatch$ = store.select<Match>(fromProfile.getSelectedMatch);
    this.history$ = store.select<Match[]>(fromProfile.getAllMatches);
    this.player$ = store.select<Player>(fromProfile.getSelectedProfile);
  }

  selectMatch(match: Match): void {
    this.store.dispatch(new matchesActions.LoadMatch(match.id));
  }

  viewProfile(player: Player): void {
    this.router.navigate(['/profile', player.id]);
  }

  openMatch(match: Match): void {
    this.store.dispatch(new matchesActions.SetCurrentMatch(match.id));
    this.router.navigate(['/match', match.id]);
  }

  tabChange($event: MatTabChangeEvent): void {
    // this.router.navigate([`${$event.index}-${$event.tab.textLabel}`], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.store.dispatch(new playersActions.SetCurrentPlayer(params['userId']));
      this.store.dispatch(new playersActions.LoadMatches(params['userId']));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
