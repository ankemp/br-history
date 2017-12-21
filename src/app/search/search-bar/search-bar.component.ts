import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { getAllProfiles } from '../../profile/store/profile.init';
import * as profileActions from '../../profile/store/profile.actions';
import { Player } from '../../models';

@Component({
  selector: 'brh-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  playerCtrl: FormControl;
  filteredPlayers: Observable<Player[]>;

  constructor(
    private router: Router,
    private store: Store<Player[]>
  ) {
    this.filteredPlayers = store.select(getAllProfiles);
    this.playerCtrl = new FormControl();
    this.playerCtrl.valueChanges
      .subscribe(playerName => {
        if (!!playerName) {
          this.store.dispatch(new profileActions.SearchByName(playerName));
        }
      });
  }

  ngOnInit() {
  }

  goToProfile(event: MatAutocompleteSelectedEvent): void {
    console.log(event);
    this.router.navigate(['/profile', event.option.value]);
  }

}
