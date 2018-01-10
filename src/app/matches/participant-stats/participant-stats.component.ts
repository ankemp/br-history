import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Participant } from '@app/models';

@Component({
  selector: 'brh-participant-stats',
  templateUrl: './participant-stats.component.html',
  styleUrls: ['./participant-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantStatsComponent {
  @Input() participant: Participant;

  constructor() { }

  get energyEfficiency(): string {
    const effFactor = this.participant.stats.energyUsed / this.participant.stats.energyGained;
    const efficiency = effFactor * 100;
    return !isNaN(efficiency) ? `${efficiency.toFixed(1)}%` : 'N/A';
  }

}
