import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Player, Team } from '@app/models';

@Component({
  selector: 'brh-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent {
  @Input() player: Player;
  @Input() teams: Team[];

  constructor() { }

}
