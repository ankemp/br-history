import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';
import { Angulartics2 } from 'angulartics2';

import { Player } from '@app/models';

@Component({
  selector: 'brh-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionsComponent implements OnInit {
  @Input() player: Player;

  constructor(
    private ga: Angulartics2,
  ) { }

  ngOnInit(): void {
    this.player.stats.champions = this.player.stats.champions.map(champion => {
      champion.totalGames = (champion.characterWins || 0) + (champion.characterLosses || 0);
      champion.winRate = this.winRate(champion);
      champion.ofTotal = this.ofTotal(champion);
      return champion;
    });
  }

  private winRate(champion: any): string {
    const { characterWins, characterLosses } = champion;
    const totalPlayed = (characterWins || 0) + (characterLosses || 0);
    const winRate = characterWins / totalPlayed * 100;
    return !isNaN(winRate) ? `${winRate.toFixed(1)}%` : '0';
  }

  private ofTotal(champion: any): string {
    const playerTotal = (this.player.stats.wins || 0) + (this.player.stats.losses || 0);
    const ofTotal = champion.totalGames / playerTotal * 100;
    return !isNaN(ofTotal) ? `${ofTotal.toFixed(1)}%` : '';
  }

  trackSort(event: MatButtonToggleChange): void {
    const action = event.value.substr(1);
    this.ga.eventTrack.next({
      action,
      properties: { category: 'champion sort' },
    });
  }

}
