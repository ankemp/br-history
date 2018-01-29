import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { reducers } from '@state/profile';
import { PlayersEffects } from '@state/effects/players';
import { FollowEffects } from '@state/effects/follow';
import { PlayerService } from '@app/services';
import { SCHEMA } from './db';

import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([PlayersEffects, FollowEffects]),
    DBModule.provideDB(SCHEMA),
  ],
  providers: [PlayerService],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class FollowModule { }
