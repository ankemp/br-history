import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Match } from '../../models/match';

@Component({
  selector: 'brh-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent {
  @Input() matches: Match[];
  @Input() match: Match;
  @Input() user: string; // Eventually will be an object
  @Output() matchSelected = new EventEmitter<Match>();

  constructor() { }

  select(match: Match): void {
    this.matchSelected.emit(match);
  }

  kdRatio(match: Match): number | boolean {
    const kd = match.rosters.reduce((acc, roster) =>
      roster.participants
        .filter(p => (p.player.id === this.user))
        .reduce((a, p) => p.stats.kills / p.stats.deaths, 0)
      , 0);
    return kd !== Infinity ? kd : false;
  }

  score(match: Match): number | boolean {
    const score = match.rosters.reduce((acc, roster) =>
      roster.participants
        .filter(p => (p.player.id === this.user))
        .reduce((a, p) => p.stats.score, 0)
      , 0);
    return score || false;
  }

  isWinner(match: Match): boolean {
    return match.rosters.find(roster =>
      !!roster.participants.find(p => p.player.id === this.user)
    ).won;
  }

}
