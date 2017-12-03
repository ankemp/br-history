import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchDetailsModule } from '../match-details/match-details.module';
import { MatchService } from '../services/match.service';

import { HistoryRoutingModule } from './history-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule,
    MatchDetailsModule,
    HistoryRoutingModule
  ],
  providers: [
    MatchService
  ],
  declarations: [ContainerComponent]
})
export class HistoryModule { }
