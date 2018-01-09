import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatButtonToggleChange, MatSlideToggleChange } from '@angular/material';
import { Angulartics2 } from 'angulartics2';

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

  constructor(
    private ga: Angulartics2,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.teams) {
      this.rankedTeams = changes.teams.currentValue.filter(team => team.teamType !== 'solo');
      this.noNameTeams = changes.teams.currentValue.filter(team => team.name === '');
    }
  }

  trackSort(event: MatButtonToggleChange): void {
    const action = event.value.substr(1);
    this.ga.eventTrack.next({
      action,
      properties: { category: 'team sort' },
    });
  }

  trackNoNameToggle(event: MatSlideToggleChange): void {
    this.ga.eventTrack.next({
      action: event.checked ? 'hide' : 'show',
      properties: { category: 'team no name' },
    });
  }

}
