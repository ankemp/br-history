import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as fromProfile from '@app/state/profile';
import * as profileActions from '@app/state/actions/players';
import { Player } from '@app/models';

@Component({
  selector: 'brh-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  playerCtrl: FormControl;
  searchQuery$: Observable<string>;
  players$: Observable<Player[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private router: Router,
    private store: Store<fromProfile.State>
  ) {
    this.searchQuery$ = store.select(fromProfile.getSearchQuery);
    this.players$ = store.select(fromProfile.getSearchResults);
    this.loading$ = store.select(fromProfile.getSearchLoading);
    this.error$ = store.select(fromProfile.getSearchError);

    this.playerCtrl = new FormControl();
    this.playerCtrl.valueChanges
      .subscribe(playerName => {
        if (!!playerName && playerName !== '') {
          this.store.dispatch(new profileActions.SearchByName(playerName));
        }
      });
  }

  goToProfile(event: MatOptionSelectionChange, player: Player): void {
    this.router.navigate(['/profile', player.id]);
  }

}
