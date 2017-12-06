import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';

@Component({
  selector: 'brh-container',
  template: `
    <brh-header></brh-header>
    <brh-tabs (matchSelected)="selectMatch($event)" [user]="user" [matches]="history$ | async" [match]="selectedMatch$ | async"></brh-tabs>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public history$: Observable<Match[]>;
  public selectedMatch$: Observable<Match>;
  public user: string; // Eventually will be an object
  private routeSub: Subscription;

  constructor(
    private match: MatchService,
    private activatedRoute: ActivatedRoute
  ) { }

  selectMatch(match: Match): void {
    console.log(match);
    this.selectedMatch$ = this.match.getMatch(match.id);
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.user = params['userId'];
      this.history$ = this.match.recent(params['userId']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
