import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
    [player]="player$ | async"
    [teams]="teams$ | async"
    [isTeamsLoading]="isTeamsLoading$ | async"
    [matches]="history$ | async"
    [match]="selectedMatch$ | async"
    [isMatchesLoading]="isMatchesLoading$ | async"
    [teamsError]="teamsError$ | async">
    </brh-tabs>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public history$: Observable<Match[]>;
  public selectedMatch$: Observable<Match>;
  public matchesError$: Observable<string>;
  public isMatchesLoading$: Observable<boolean>;
  public player$: Observable<Player>;
  public teams$: Observable<Team[]>;
  public isTeamsLoading$: Observable<boolean>;
  public teamsError$: Observable<string>;
  private routeSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>,
  ) {
    this.selectedMatch$ = store.select<Match>(fromProfile.getSelectedMatch);
    this.history$ = store.select<Match[]>(fromProfile.getAllMatches);
    this.isMatchesLoading$ = store.select<boolean>(fromProfile.getMatchesLoading);
    this.matchesError$ = store.select<string>(fromProfile.getMatchesError);
    this.player$ = store.select<Player>(fromProfile.getSelectedProfile);
    this.teams$ = store.select<Team[]>(fromProfile.getAllTeams);
    this.isTeamsLoading$ = store.select<boolean>(fromProfile.getTeamsLoading);
    this.teamsError$ = store.select<string>(fromProfile.getTeamsError);
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
