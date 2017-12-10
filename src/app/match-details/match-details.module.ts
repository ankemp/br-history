import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchDetailsRoutingModule } from './match-details-routing.module';

import { MatchesModule } from '../matches/matches.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    MatchDetailsRoutingModule,
    MatchesModule
  ],
  declarations: [
    ContainerComponent
  ]
})
export class MatchDetailsModule { }
