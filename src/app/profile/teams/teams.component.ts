import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Player, Team } from '@app/models';

@Component({
  selector: 'brh-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent implements OnChanges {
  @Input() player: Player;
  @Input() teams: Team[];
  @Output() viewProfile = new EventEmitter<Partial<Player>>();
  rankedTeams: Team[];
  noNameTeams: Team[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.teams) {
      this.rankedTeams = changes.teams.currentValue.filter(team => team.teamType !== 'solo');
      this.noNameTeams = changes.teams.currentValue.filter(team => team.name === '');
    }
  }
}
