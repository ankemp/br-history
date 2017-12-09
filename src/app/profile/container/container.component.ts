import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MatchService } from '../../services/match.service';
import { PlayerService } from '../../services/player.service';
import { Match } from '../../models/match';
import { Player } from '../../models/player';

@Component({
  selector: 'brh-container',
  template: `
    <brh-header *ngIf="(player$ | async)" [player]="player$ | async"></brh-header>
    <brh-tabs
    *ngIf="(player$ | async) && (history$ | async)"
    (matchSelected)="selectMatch($event)"
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
    private match: MatchService,
    private player: PlayerService,
    private activatedRoute: ActivatedRoute
  ) { }

  selectMatch(match: Match): void {
    this.selectedMatch$ = this.match.get(match.id);
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.player$ = this.player.get(params['userId']);
      this.history$ = this.match.byPlayer(params['userId']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
