import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '../../reducers/index';
import * as fromProfile from '../store/profile.init';
import * as profileActions from '../store/profile.actions';
import * as fromMatches from '../../matches/store/matches.init';
import * as matchesActions from '../../matches/store/matches.actions';
import { Match } from '../../models/match';
import { Player } from '../../models/player';

@Component({
  selector: 'brh-container',
  template: `
    <brh-header *ngIf="(player$ | async)" [player]="player$ | async"></brh-header>
    <brh-tabs
    *ngIf="(player$ | async) && (history$ | async)"
    (matchSelected)="selectMatch($event)"
    (viewProfile)="viewProfile($event)"
    (openMatch)="openMatch($event)"
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
    this.selectedMatch$ = store.select<Match>(fromMatches.getSelectedMatch);
    this.history$ = store.select<Match[]>(fromMatches.getAllMatches);
    this.player$ = store.select<Player>(fromProfile.getSelectedProfile);
  }

  selectMatch(match: Match): void {
    this.store.dispatch(new matchesActions.LoadMatch(match.id));
  }

  viewProfile(player: Player): void {
    this.store.dispatch(new profileActions.SetCurrentProfile(player.id));
    this.router.navigate(['/profile', player.id]);
  }

  openMatch(match: Match): void {
    this.store.dispatch(new matchesActions.SetCurrentMatch(match.id));
    this.router.navigate(['/match', match.id]);
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.store.dispatch(new profileActions.LoadProfile(params['userId']));
      this.store.dispatch(new matchesActions.LoadByPlayer(params['userId']));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
