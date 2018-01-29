import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Player } from '@app/models';

@Component({
  selector: 'brh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() player: Player;
  @Output() toggleFollow = new EventEmitter<Player>();

  constructor() { }

  get winRate(): string {
    const { wins, losses } = this.player.stats;
    const totalPlayed = (wins || 0) + (losses || 0);
    const winRate = (wins / totalPlayed * 100);
    return !isNaN(winRate) ? `${winRate.toFixed(1)}%` : 'N/A';
  }
}
