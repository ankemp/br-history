import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

import { Match, Player, Participant } from '@app/models';

@Component({
  selector: 'brh-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnChanges {
  @Input() matches: Match[];
  @Input() match: Match;
  @Input() player: Player;
  @Output() matchSelected = new EventEmitter<Match>();
  @Output() viewProfile = new EventEmitter<Player>();
  @Output() openMatch = new EventEmitter<Match>();
  @Output() reloadMatches = new EventEmitter<string>();
  refreshTime: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.player) {
      this.setRefreshTime(changes.player.currentValue);
    }
  }

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

  getPlayerParticipant(match: Match): Participant {
    let participant;
    if (!!match.rosters) {
      participant = match.rosters.reduce((pt, r) => {
        const pta = r.participants.find(p => p.player.id === this.player.id);
        if (!!pta) {
          pt = pta;
        }
        return pt;
      }, {});
    }
    return participant;
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

  setRefreshTime(player: Player): void {
    const newest = new Date(player.newestMatch);
    const mins = newest.setMinutes(newest.getMinutes() + 20);
    this.refreshTime = new Date(mins).toJSON();
  }

}
