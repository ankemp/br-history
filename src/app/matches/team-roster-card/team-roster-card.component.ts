import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import * as matchSelectors from '@state/matches';
import * as telemetryActions from '@state/actions/telemetry';
import { Player, Roster, Participant, RoundStat } from '@app/models';

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
  roundStats$: Observable<RoundStat[]>;

  constructor(
    private store: Store<RoundStat>
  ) {
    this.roundStats$ = store.select(matchSelectors.getMatchRoundStats);
  }

  isMvp(participant: Participant): boolean {
    return this.topParticipant.id === participant.id && this.roster.won;
  }

}
