import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brh-winlose',
  templateUrl: './winlose.component.html',
  styleUrls: ['./winlose.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinloseComponent {
  @Input() wins: number;
  @Input() losses: number;
  @Input() showRate = true;

  constructor() { }

  get winRate(): string {
    const totalPlayed = (this.wins || 0) + (this.losses || 0);
    const winRate = (this.wins / totalPlayed * 100);
    return !isNaN(winRate) ? `${winRate.toFixed(1)}%` : '0.0%';
  }

}
