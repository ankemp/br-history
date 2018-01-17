import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Player, Roster, Participant } from '@app/models';

@Component({
  selector: 'brh-team-roster-card',
  templateUrl: './team-roster-card.component.html',
  styleUrls: ['./team-roster-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamRosterCardComponent {
  @Input() player?: Player;
  @Input() roster: Roster;
  @Input() topParticipant: Participant;
  @Output() viewProfile = new EventEmitter<Player>();
  @Output() viewBattlerites = new EventEmitter<Player>();

  constructor() { }

  isMvp(participant: Participant): boolean {
    return this.topParticipant.id === participant.id && this.roster.won;
  }

}
