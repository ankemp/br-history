import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatExpansionModule,
  MatCardModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

import { NgArrayPipesModule } from 'ngx-pipes';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { MatchService } from '../services/match.service';

import { ProfileRoutingModule } from './match-details-routing.module';
import { MatchListComponent } from './match-list/match-list.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchDetailsContainerComponent } from './match-details-container/match-details-container.component';

@NgModule({
  imports: [
    CommonModule,
    NgArrayPipesModule,
    Ng2GoogleChartsModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    ProfileRoutingModule
  ],
  declarations: [
    MatchListComponent,
    TeamRosterComponent,
    MatchDetailsComponent,
    MatchDetailsContainerComponent
  ],
  providers: [
    MatchService
  ],
  exports: [
    MatchDetailsComponent
  ]
})
export class MatchDetailsModule { }
