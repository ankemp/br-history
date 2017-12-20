import { Component, Input } from '@angular/core';

import { Player } from '../../models';

@Component({
  selector: 'brh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() player: Player;

  constructor() { }

  get winRate(): string {
    const { wins, losses } = this.player.stats;
    const totalPlayed = wins + losses;
    const winRate = (wins / totalPlayed * 100).toFixed(2);
    return `${winRate}%`;
  }
}
