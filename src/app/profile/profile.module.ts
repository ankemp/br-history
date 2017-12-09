import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatListModule } from '@angular/material';

import { MatchDetailsModule } from '../match-details/match-details.module';

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
    MatTabsModule,
    MatListModule,
    MatchDetailsModule,
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
