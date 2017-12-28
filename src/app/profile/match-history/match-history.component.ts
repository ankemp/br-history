import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Match, Player } from '@app/models';

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
  @Output() viewProfile = new EventEmitter<Player>();
  @Output() openMatch = new EventEmitter<Match>();
  @Output() reloadMatches = new EventEmitter<string>();

  constructor() { }

  kdRatio(match: Match): number | boolean {
    const kd = match.rosters.reduce((acc, roster) =>
      roster.participants
        .filter(p => (p.player.id === this.player.id))
        .reduce((a, p) => p.stats.kills / p.stats.deaths, 0)
      , 0);
    return kd !== Infinity ? kd : false;
  }

  get wlRatio(): string {
    let w = 0, l = 0;
    this.matches.forEach(match => {
      this.isWinner(match) ? w++ : l++;
    });
    return `${w}:${l}`;
  }

  isWinner(match: Match): boolean {
    let roster;
    if (!!match.rosters) {
      roster = match.rosters.find(r => r.participants.length ? !!r.participants.find(p => p.player.id === this.player.id) : false);
    }
    return roster ? roster.won : false;
  }

  get hasStats(): boolean {
    return !!this.matches.findIndex(match => typeof match.rosters === 'undefined');
  }

  get refreshTime(): string {
    const newest = new Date(this.player.newestMatch);
    const mins = newest.setMinutes(newest.getMinutes() + 20);
    return new Date(mins).toJSON();
  }

}
