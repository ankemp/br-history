import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Player } from '@app/models';

@Component({
  selector: 'brh-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionsComponent {
  @Input() player: Player;

  constructor() { }

  winRate(champion: any): string {
    const { characterWins, characterLosses } = champion;
    const totalPlayed = (characterWins || 0) + (characterLosses || 0);
    const winRate = (characterWins / totalPlayed * 100);
    return !isNaN(winRate) ? `${winRate.toFixed(2)}%` : 'N/A';
  }

}
