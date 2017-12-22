import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@state/matches';
import { MatchesEffects } from '@state/effects/matches';
import { MatchService } from '@app/services';

import { MatchDetailsRoutingModule } from './match-details-routing.module';

import { MatchesModule } from '../matches/matches.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('matches', reducers),
    EffectsModule.forFeature([MatchesEffects]),
    MatchDetailsRoutingModule,
    MatchesModule
  ],
  providers: [
    MatchService
  ],
  declarations: [
    ContainerComponent
  ]
})
export class MatchDetailsModule { }
