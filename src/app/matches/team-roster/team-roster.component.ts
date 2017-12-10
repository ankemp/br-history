import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Roster } from '../../models/roster';

@Component({
  selector: 'brh-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamRosterComponent {
  @Input() roster: Roster;
  private chartOptions = {
    height: 300,
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: true,
  };

  constructor() { }

  outgoingChart(): object {
    const data = Object.assign({});
    data.chartType = 'ColumnChart';
    data.dataTable = this.buildDataTable(['damageDone', 'disablesDone', 'healingDone']);
    data.options = this.chartOptions;
    return data;
  }

  incomingChart(): object {
    const data = Object.assign({});
    data.chartType = 'ColumnChart';
    data.dataTable = this.buildDataTable(['damageReceived', 'disablesReceived', 'healingReceived']);
    data.options = this.chartOptions;
    return data;
  }

  energyChart(): object {
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
    const data = [['UserID', ...cols]];
    const { participants } = this.roster;
    data.push(
      ...participants.map(participant =>
        [participant.player.id, ...cols.map(col => participant.stats[col])]
      )
    );
    return data;
  }

}