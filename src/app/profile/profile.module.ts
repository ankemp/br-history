import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/profile.init';
import { ProfileEffects } from './store/profile.effects';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { NgArrayPipesModule } from 'ngx-pipes';

import { SharedModule } from '../shared/shared.module';
import { MatchesModule } from '../matches/matches.module';

import { PlayerService } from '../services/player.service';
import { ProfileResolver } from './profile.resolver';

import { ProfileRoutingModule } from './profile-routing.module';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { ChampionsComponent } from './champions/champions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects]),
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NgArrayPipesModule,
    SharedModule,
    MatchesModule,
    ProfileRoutingModule
  ],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    TabsComponent,
    MatchHistoryComponent,
    ChampionsComponent
  ],
  providers: [
    PlayerService,
    ProfileResolver
  ]
})
export class ProfileModule { }
