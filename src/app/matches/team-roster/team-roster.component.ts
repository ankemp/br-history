import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';

import { Roster, Player, Participant } from '@app/models';

@Component({
  selector: 'brh-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamRosterComponent implements OnInit {
  @Input() player?: Player;
  @Input() roster: Roster;
  @Output() viewProfile = new EventEmitter<Player>();
  topParticipant: Participant;

  constructor() { }

  ngOnInit(): void {
    this.topParticipant = this.roster.participants.sort((a, b) => b.stats.score - a.stats.score)[0];
  }

}
