import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatCardModule } from '@angular/material';

import { MatchListComponent } from './match-list/match-list.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { MatchRoundComponent } from './match-round/match-round.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { ParticipantCardComponent } from './participant-card/participant-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule
  ],
  declarations: [
    MatchListComponent,
    TeamRosterComponent,
    MatchRoundComponent,
    PlayerCardComponent,
    ParticipantCardComponent
  ],
  exports: [MatchListComponent]
})
export class MatchDetailsModule { }
