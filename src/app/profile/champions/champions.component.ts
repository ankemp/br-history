import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';
import { Angulartics2 } from 'angulartics2';

import { Player } from '@app/models';

@Component({
  selector: 'brh-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionsComponent {
  @Input() player: Player;

  constructor(
    private ga: Angulartics2,
  ) { }

  winRate(champion: any): string {
    const { characterWins, characterLosses } = champion;
    const totalPlayed = (characterWins || 0) + (characterLosses || 0);
    const winRate = (characterWins / totalPlayed * 100);
    return !isNaN(winRate) ? `${winRate.toFixed(2)}%` : 'N/A';
  }

  trackSort(event: MatButtonToggleChange): void {
    const action = event.value.substr(1);
    this.ga.eventTrack.next({
      action,
      properties: { category: 'champion sort' },
    });
  }

}
