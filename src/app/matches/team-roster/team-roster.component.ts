import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Roster } from '../../models/roster';
import { Player } from '../../models/player';
import { Participant } from '../../models/participant';

@Component({
  selector: 'brh-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamRosterComponent {
  @Input() roster: Roster;
  @Input() player?: Player;
  @Output() viewProfile = new EventEmitter<Player>();

  constructor() { }

  profile(player: Player): void {
    this.viewProfile.emit(player);
  }

  viewProfileDisabled(participant: Participant): boolean {
    return (!!participant.player && participant.player.id === this.player.id);
  }

}
