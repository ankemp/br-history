import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Angulartics2 } from 'angulartics2';
import { Observable } from 'rxjs/Observable';

import { BattleritesComponent } from '../battlerites/battlerites.component';

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
  roundStats$: Observable<RoundStat[]>;
  telemetryLoading$: Observable<boolean>;

  constructor(
    private store: Store<RoundStat>,
    public dialog: MatDialog,
    private ga: Angulartics2,
  ) {
    this.roundStats$ = store.select(matchSelectors.getMatchRoundStats);
    this.telemetryLoading$ = store.select(matchSelectors.getTelemetryLoading);
  }

  isMvp(participant: Participant): boolean {
    return this.topParticipant.id === participant.id && this.roster.won;
  }

  viewBattlerites(participant: Participant): void {
    this.dialog.open(BattleritesComponent, {
      data: participant
    });
    this.ga.eventTrack.next({
      action: 'show',
      properties: { category: 'match battlerites' },
    });
  }

}
