import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule, MatCardModule, MatListModule } from '@angular/material';

import { NgArrayPipesModule } from 'ngx-pipes';

import { MatchListComponent } from './match-list/match-list.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';

@NgModule({
  imports: [
    CommonModule,
    NgArrayPipesModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    MatchListComponent,
    TeamRosterComponent
  ],
  exports: [MatchListComponent]
})
export class MatchDetailsModule { }
