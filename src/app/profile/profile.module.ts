import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/profile.init';
import { ProfileEffects } from './store/profile.effects';

import { MatTabsModule, MatListModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { MatchesModule } from '../matches/matches.module';

import { PlayerService } from '../services/player.service';
import { ProfileResolver } from './profile.resolver';

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
    SharedModule,
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
    PlayerService,
    ProfileResolver
  ]
})
export class ProfileModule { }
