import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import { Store } from '@ngrx/store';

import { State } from '@app/reducers';
import * as matchesActions from '@state/actions/matches';
import { Match, Player, Team } from '@app/models';

@Component({
  selector: 'brh-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() matches: Match[];
  @Input() match: Match;
  @Input() isMatchesLoading: boolean;
  @Input() player: Player;
  @Input() teams: Team[];
  @Input() isTeamsLoading: boolean;
  @Input() teamsError: string;
  currentTab = 0;

  constructor(
    private router: Router,
    private store: Store<State>,
  ) { }

  get isTeamsActive(): boolean {
    return (this.currentTab === 1 || !this.isTeamsLoading && !!!this.teamsError);
  }

  tabChange($event: MatTabChangeEvent): void {
    this.store.dispatch(new matchesActions.UnSetCurrentMatch);
    // this.router.navigate([`${$event.index}-${$event.tab.textLabel}`], { relativeTo: this.activatedRoute });
  }

  viewProfile(player: Partial<Player>): void {
    this.router.navigate(['/profile', player.id]);
  }

}
