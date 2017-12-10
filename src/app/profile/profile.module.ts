import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/profile.init';
import { ProfileEffects } from './store/profile.effects';

import { MatTabsModule, MatListModule } from '@angular/material';

import { MatchesModule } from '../matches/matches.module';

import { MatchService } from '../services/match.service';
import { PlayerService } from '../services/player.service';

import { ProfileRoutingModule } from './profile-routing.module';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatchHistoryComponent } from './match-history/match-history.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects]),
    MatTabsModule,
    MatListModule,
    MatchesModule,
    ProfileRoutingModule
  ],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    TabsComponent,
    MatchHistoryComponent
  ],
  providers: [
    MatchService,
    PlayerService
  ]
})
export class ProfileModule { }
