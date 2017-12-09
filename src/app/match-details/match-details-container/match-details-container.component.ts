import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';

@Component({
  selector: 'brh-match-details-container',
  template: `
    <brh-match-details
    *ngIf="!!(match$ | async)"
    [match]="match$ | async">
    </brh-match-details>
  `,
  styleUrls: ['./match-details-container.component.css']
})
export class MatchDetailsContainerComponent implements OnInit, OnDestroy {
  public match$: Observable<Match>;
  private routeSub: Subscription;

  constructor(
    private match: MatchService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.match$ = this.match.get(params['matchId']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
