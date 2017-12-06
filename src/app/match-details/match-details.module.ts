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

import { MatchListComponent } from './match-list/match-list.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { MatchDetailsComponent } from './match-details/match-details.component';

@NgModule({
  imports: [
    CommonModule,
    NgArrayPipesModule,
    Ng2GoogleChartsModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    MatchListComponent,
    TeamRosterComponent,
    MatchDetailsComponent
  ],
  exports: [
    MatchListComponent,
    MatchDetailsComponent
  ]
})
export class MatchDetailsModule { }
