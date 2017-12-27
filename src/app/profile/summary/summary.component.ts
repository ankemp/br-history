import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Player } from '@app/models';

@Component({
  selector: 'brh-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  @Input() player: Player;

  constructor() { }

  get hasBrawl(): boolean {
    return (typeof this.player.stats.brawlLosses !== 'undefined' || typeof this.player.stats.brawlWins !== 'undefined');
  }

  get hasBg(): boolean {
    return (typeof this.player.stats.battlegroundsWins !== 'undefined' || typeof this.player.stats.battlegroundsWins !== 'undefined');
  }

}
