import { Component, Input } from '@angular/core';

import { Player } from '@app/models';

@Component({
  selector: 'brh-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() player: Player;

  constructor() { }

  winRate(wins: number, losses: number): string {
    const totalPlayed = (wins || 0) + (losses || 0);
    const winRate = (wins / totalPlayed * 100);
    return !isNaN(winRate) ? `${winRate.toFixed(2)}%` : 'N/A';
  }

}
