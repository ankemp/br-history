import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';

import * as telemetryActions from '@state/actions/telemetry';
import { Roster, Player, Participant, Match, Team } from '@app/models';

@Component({
  selector: 'brh-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamRosterComponent implements OnInit {
  @Input() player?: Player;
  @Input() roster: Roster;
  @Input() team?: Team;
  @Input() teamNum: number;
  @Input() singleMatch: boolean;
  @Output() viewProfile = new EventEmitter<Player>();
  topParticipant: Participant;

  constructor(private store: Store<Match>) { }

  ngOnInit(): void {
    this.topParticipant = this.roster.participants.sort((a, b) => b.stats.score - a.stats.score)[0];
  }

  viewBattlerites(player: Player): void {
    this.store.dispatch(new telemetryActions.GetPlayerBattlerites(player.id));
  }

}
