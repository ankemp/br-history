import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Match } from '../../models/match';
import { Player } from '../../models/player';

@Component({
  selector: 'brh-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent {
  @Input() matches: Match[];
  @Input() match: Match;
  @Input() player: Player;
  @Output() matchSelected = new EventEmitter<Match>();

  constructor() { }

  select(match: Match): void {
    this.matchSelected.emit(match);
  }

  kdRatio(match: Match): number | boolean {
    const kd = match.rosters.reduce((acc, roster) =>
      roster.participants
        .filter(p => (p.player.id === this.player.id))
        .reduce((a, p) => p.stats.kills / p.stats.deaths, 0)
      , 0);
    return kd !== Infinity ? kd : false;
  }

  isWinner(match: Match): boolean {
    let roster;
    if (!!match.rosters) {
      roster = match.rosters.find(r => !!r.participants.find(p => p.player.id === this.player.id) || false);
    }
    return roster ? roster.won : false;
  }

  reduceStat(match: Match, stat: string): number {
    return match.rosters.reduce((acc, roster) =>
      roster.participants
        .filter(p => (p.player.id === this.player.id))
        .reduce((a, p) => p.stats[stat], 0)
      , 0);
  }

  reduceStats(stat: string, average = false): number {
    let s = 0;
    if (!!this.matches) {
      s = this.matches.reduce((acc, match) => {
        acc += this.reduceStat(match, stat);
        return acc;
      }, 0);
      if (average) {
        s = Math.round(s /= this.matches.length);
      }
    }
    return s;
  }

  get hasStats(): boolean {
    return !!this.matches.findIndex(match => typeof match.rosters === 'undefined');
  }

}
