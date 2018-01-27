import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Angulartics2 } from 'angulartics2';

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
  showMatchCharts = false;

  constructor(
    private store: Store<Match>,
    private ga: Angulartics2,
  ) { }

  ngOnInit(): void {
    this.topParticipant = this.roster.participants.sort((a, b) => b.stats.score - a.stats.score)[0];
  }

  toggleMatchCharts(): void {
    this.showMatchCharts = !this.showMatchCharts;
    this.ga.eventTrack.next({
      action: this.showMatchCharts ? 'show' : 'hide',
      properties: { category: 'match charts' },
    });
  }

  toggleParticipantExpandAll(): void {
    // Awaiting: https://github.com/angular/material2/issues/6929
    // PR: https://github.com/angular/material2/pull/7461
  }

}
