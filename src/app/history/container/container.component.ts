import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
export class ContainerComponent implements OnInit {
  public history$: Observable<Match[]>;

  constructor(
    private match: MatchService,
  ) { }

  ngOnInit() {
    this.history$ = this.match.recent();
    this.history$.subscribe(his => console.log(his));
  }

}
