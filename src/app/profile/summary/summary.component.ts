import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

import { Player, Team } from '@app/models';

@Component({
  selector: 'brh-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnChanges {
  @Input() player: Player;
  @Input() teams: Team[];
  @Output() viewProfile = new EventEmitter<Partial<Player>>();
  rSolo: Team;
  r2v2: Team;
  r3v3: Team;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.teams && changes.teams.currentValue.length) {
      this.rSolo = changes.teams.currentValue.find(team => team.teamType === 'solo');
      if (this.has2v2) {
        const r2v2Max = changes.teams.currentValue
          .filter(team => team.teamType === '2v2')
          .sort((a, b) => b.league - a.league)
          .shift().league;
        this.r2v2 = changes.teams.currentValue
          .filter(team => team.teamType === '2v2' && team.league === r2v2Max)
          .sort((a, b) => a.division - b.division)
          .shift();
      }

      if (this.has3v3) {
        const r3v3Max = changes.teams.currentValue
          .filter(team => team.teamType === '3v3')
          .sort((a, b) => b.league - a.league)
          .shift().league;
        this.r3v3 = changes.teams.currentValue
          .filter(team => team.teamType === '3v3' && team.league === r3v3Max)
          .sort((a, b) => a.division - b.division)
          .shift();
      }
    }
  }

  get hasBrawl(): boolean {
    return (typeof this.player.stats.brawlLosses !== 'undefined' || typeof this.player.stats.brawlWins !== 'undefined');
  }

  get hasBg(): boolean {
    return (typeof this.player.stats.battlegroundsWins !== 'undefined' || typeof this.player.stats.battlegroundsWins !== 'undefined');
  }

  get hasSolo(): boolean {
    return !!this.teams.find(team => team.teamType === 'solo');
  }

  get has2v2(): boolean {
    return !!this.teams.filter(team => team.teamType === '2v2').length;
  }

  get has3v3(): boolean {
    return !!this.teams.filter(team => team.teamType === '3v3').length;
  }

}
