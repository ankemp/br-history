import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
} from '@angular/material';

import { NgArrayPipesModule } from 'ngx-pipes';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SharedModule } from '@app/shared/shared.module';

import { MatchListComponent } from './match-list/match-list.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { ParticipantStatsComponent } from './participant-stats/participant-stats.component';
import { MatchStatsComponent } from './match-stats/match-stats.component';
import { TeamRosterListComponent } from './team-roster-list/team-roster-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgArrayPipesModule,
    Ng2GoogleChartsModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
  ],
  declarations: [
    MatchListComponent,
    TeamRosterComponent,
    MatchDetailsComponent,
    ParticipantStatsComponent,
    MatchStatsComponent,
    TeamRosterListComponent
  ],
  exports: [
    MatchDetailsComponent
  ]
})
export class MatchesModule { }
