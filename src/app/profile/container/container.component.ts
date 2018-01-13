import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import { Angulartics2 } from 'angulartics2';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from '@app/reducers';
import * as fromProfile from '@state/profile';
import * as playersActions from '@state/actions/players';
import * as matchesActions from '@state/actions/matches';
import { Match, Player, Team } from '@app/models';

@Component({
  selector: 'brh-container',
  template: `
    <brh-header *ngIf="(player$ | async)" [player]="player$ | async"></brh-header>
    <brh-tabs
    *ngIf="(history$ | async) && (player$ | async)"
    (matchSelected)="selectMatch($event)"
    (viewProfile)="viewProfile($event)"
    (openMatch)="openMatch($event)"
    (reloadMatches)="reloadMatches($event)"
    (tabChange)="tabChange($event)"
    [player]="player$ | async"
    [teams]="teams$ | async"
    [isTeamsLoading]="isTeamsLoading$ | async"
    [matches]="history$ | async"
    [match]="selectedMatch$ | async"
    [isMatchesLoading]="isMatchesLoading$ | async">
    </brh-tabs>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public history$: Observable<Match[]>;
  public selectedMatch$: Observable<Match>;
  public player$: Observable<Player>;
  public teams$: Observable<Team[]>;
  public isTeamsLoading$: Observable<boolean>;
  public isMatchesLoading$: Observable<boolean>;
  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ga: Angulartics2,
    private store: Store<State>,
  ) {
    this.selectedMatch$ = store.select<Match>(fromProfile.getSelectedMatch);
    this.history$ = store.select<Match[]>(fromProfile.getAllMatches);
    this.player$ = store.select<Player>(fromProfile.getSelectedProfile);
    this.teams$ = store.select<Team[]>(fromProfile.getAllTeams);
    this.isTeamsLoading$ = store.select<boolean>(fromProfile.getTeamsLoading);
    this.isMatchesLoading$ = store.select<boolean>(fromProfile.getMatchesLoading);
  }

  selectMatch(match: Match): void {
    this.store.dispatch(new matchesActions.LoadMatch(match.id));
  }

  viewProfile(player: Partial<Player>): void {
    this.router.navigate(['/profile', player.id]);
  }

  openMatch(match: Match): void {
    this.store.dispatch(new matchesActions.SetCurrentMatch(match.id));
    this.router.navigate(['/match', match.id]);
  }

  reloadMatches(playerId: string): void {
    this.ga.eventTrack.next({
      action: 'history reload',
      properties: { category: 'player profile' },
    });
    this.store.dispatch(new playersActions.LoadPlayer(playerId));
  }

  tabChange($event: MatTabChangeEvent): void {
    // this.router.navigate([`${$event.index}-${$event.tab.textLabel}`], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.store.dispatch(new playersActions.SetCurrentPlayer(params['userId']));
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
