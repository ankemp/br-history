import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Roster, Player, Participant } from '@app/models';

@Component({
  selector: 'brh-team-roster-list',
  templateUrl: './team-roster-list.component.html',
  styleUrls: ['./team-roster-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamRosterListComponent {
  @Input() player?: Player;
  @Input() roster: Roster;
  @Input() topParticipant: Participant;
  @Output() viewProfile = new EventEmitter<Player>();

  constructor() { }

  viewProfileDisabled(participant: Participant): boolean {
    return (!!participant.player && participant.player.id === this.player.id);
  }

  isMvp(participant: Participant): boolean {
    return this.topParticipant.id === participant.id && this.roster.won;
  }

}
