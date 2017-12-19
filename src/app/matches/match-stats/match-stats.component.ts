import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Match, Roster } from '../../models';

@Component({
  selector: 'brh-match-stats',
  templateUrl: './match-stats.component.html',
  styleUrls: ['./match-stats.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchStatsComponent {
  @Input() match?: Match;
  @Input() roster: Roster;

  private chartOptions = {
    height: 300,
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
  };

  constructor() { }

  get outgoingChart(): object {
    const data = Object.assign({});
    data.chartType = 'ColumnChart';
    data.dataTable = this.buildDataTable(['damageDone', 'disablesDone', 'healingDone']);
    data.options = this.chartOptions;
    return data;
  }

  get incomingChart(): object {
    const data = Object.assign({});
    data.chartType = 'ColumnChart';
    data.dataTable = this.buildDataTable(['damageReceived', 'disablesReceived', 'healingReceived']);
    data.options = this.chartOptions;
    return data;
  }

  get energyChart(): object {
    const data = Object.assign({});
    data.chartType = 'ColumnChart';
    data.dataTable = this.buildDataTable(['energyGained', 'energyUsed']);
    data.options = this.chartOptions;
    return data;
  }

  private reduceStats(participants: any[], columns: any[]): object {
    return columns.reduce((newObj, column) => {
      newObj[column] = participants.reduce((sum, participant) => sum + participant.attributes.stats[column], 0);
      return newObj;
    }, {});
  }

  private buildDataTable(cols: string[]): any[] {
    const data = [['Username', ...cols]];
    const { participants } = this.roster;
    data.push(
      ...participants.map(participant =>
        [participant.player.name, ...cols.map(col => participant.stats[col])]
      )
    );
    return data;
  }

}
