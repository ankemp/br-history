import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges
} from '@angular/core';
import { Angulartics2 } from 'angulartics2';

import { Participant, RoundStat, PlayerStat } from '@app/models';

@Component({
  selector: 'brh-participant-stats',
  templateUrl: './participant-stats.component.html',
  styleUrls: ['./participant-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantStatsComponent implements OnChanges {
  @Input() participant: Participant;
  @Input() roundStats?: RoundStat[];
  pRoundStats: any[];
  selectedStat: PlayerStat;
  selected: any;

  constructor(
    private ga: Angulartics2,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.roundStats) {
      this.pRoundStats = changes.roundStats.currentValue
        .map((rs: RoundStat) => {
          const stats = rs.stats.find(r => {
            return r.userID === this.participant.player.id;
          });
          return Object.assign({}, rs, { stats });
        });
    }
    if (!!!this.selected && changes.participant) {
      this.selected = changes.participant.currentValue.id;
      this.selectedStat = changes.participant.currentValue.stats;
    }
  }

  energyEfficiency(stats: PlayerStat): string {
    const effFactor = stats.energyUsed / stats.energyGained;
    const efficiency = effFactor * 100;
    return !isNaN(efficiency) ? `${efficiency.toFixed(1)}%` : 'N/A';
  }

  selectStat(stats: any): void {
    this.selectedStat = stats.stats;
    this.selected = stats.id || stats.ordinal;
    const round = !!stats.id ? 'match totals' : `round ${stats.ordinal}`;
    this.ga.eventTrack.next({
      action: `show ${round}`,
      properties: { category: 'participant stats' },
    });
  }

}
