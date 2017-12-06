import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';

@Component({
  selector: 'brh-container',
  template: `
    <h1>Match History</h1>
    <brh-match-list [matches]="history$ | async"></brh-match-list>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public history$: Observable<Match[]>;
  private routeSub: Subscription;

  constructor(
    private match: MatchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.history$ = this.match.recent(params['userId']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
