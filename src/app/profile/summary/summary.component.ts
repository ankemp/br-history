import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges
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
  rSolo: Team;
  r2v2: Team;
  r3v3: Team;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.teams) {
      this.rSolo = changes.teams.currentValue.find(team => team.teamType === 'solo');
    }
  }

  get hasBrawl(): boolean {
    return (typeof this.player.stats.brawlLosses !== 'undefined' || typeof this.player.stats.brawlWins !== 'undefined');
  }

  get hasBg(): boolean {
    return (typeof this.player.stats.battlegroundsWins !== 'undefined' || typeof this.player.stats.battlegroundsWins !== 'undefined');
  }

}
