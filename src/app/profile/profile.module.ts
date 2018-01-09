import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@state/profile';
import { PlayersEffects } from '@state/effects/players';
import { MatchesEffects } from '@state/effects/matches';
import { TeamsEffects } from '@app/state/effects/teams';
import { PlayerService, MatchService, TeamService } from '@app/services';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { NgArrayPipesModule } from 'ngx-pipes';
import { CountdownTimerModule } from 'ngx-countdown-timer';

import { SharedModule } from '@app/shared/shared.module';
import { MatchesModule } from '@app/matches/matches.module';

import { ProfileResolver } from './profile.resolver';

import { ProfileRoutingModule } from './profile-routing.module';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { ChampionsComponent } from './champions/champions.component';
import { SummaryComponent } from './summary/summary.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamMembersComponent } from './team-members/team-members.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([PlayersEffects, MatchesEffects, TeamsEffects]),
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NgArrayPipesModule,
    CountdownTimerModule.forRoot(),
    SharedModule,
    MatchesModule,
    ProfileRoutingModule
  ],
  declarations: [
    ContainerComponent,
    HeaderComponent,
    TabsComponent,
    MatchHistoryComponent,
    ChampionsComponent,
    SummaryComponent,
    TeamsComponent,
    TeamMembersComponent
  ],
  providers: [
    PlayerService,
    MatchService,
    TeamService,
    ProfileResolver
  ]
})
export class ProfileModule { }
