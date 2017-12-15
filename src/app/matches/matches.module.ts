import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/matches.init';
import { MatchesEffects } from './store/matches.effects';

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
import { SharedModule } from '../shared/shared.module';

import { MatchService } from '../services/match.service';

import { MatchListComponent } from './match-list/match-list.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { ParticipantStatsComponent } from './participant-stats/participant-stats.component';
import { MatchStatsComponent } from './match-stats/match-stats.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('matches', reducers),
    EffectsModule.forFeature([MatchesEffects]),
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
    MatchStatsComponent
  ],
  providers: [
    MatchService
  ],
  exports: [
    MatchDetailsComponent
  ]
})
export class MatchesModule { }
