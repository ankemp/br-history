import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { NgArrayPipesModule } from 'ngx-pipes';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BattleritesModule } from '@app/battlerites/battlerites.module';
import { SharedModule } from '@app/shared/shared.module';

import { BattleritesComponent } from './battlerites/battlerites.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchStatsComponent } from './match-stats/match-stats.component';
import { ParticipantStatsComponent } from './participant-stats/participant-stats.component';
import { TeamRosterCardComponent } from './team-roster-card/team-roster-card.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { TeamRosterListComponent } from './team-roster-list/team-roster-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgArrayPipesModule,
    Ng2GoogleChartsModule,
    BattleritesModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [
    BattleritesComponent,
    MatchDetailsComponent,
    MatchListComponent,
    MatchStatsComponent,
    ParticipantStatsComponent,
    TeamRosterCardComponent,
    TeamRosterComponent,
    TeamRosterListComponent
  ],
  entryComponents: [
    BattleritesComponent
  ],
  exports: [
    MatchDetailsComponent
  ]
})
export class MatchesModule { }
