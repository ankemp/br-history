import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as fromProfile from '@state/profile';
import * as followActions from '@state/actions/follow';
import { Player } from '@app/models';

@Component({
  selector: 'brh-follow-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players$: Observable<Player[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private store: Store<fromProfile.State>
  ) {
    this.players$ = store.select(fromProfile.getPlayersFollowed);
    this.loading$ = store.select(fromProfile.getFollowLoading);
    this.error$ = store.select(fromProfile.getFollowError);
  }

  ngOnInit() {
    this.store.dispatch(new followActions.Load);
    this.players$.subscribe(console.log);
  }

}
