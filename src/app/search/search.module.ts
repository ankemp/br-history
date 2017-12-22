import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@app/state/profile';
import { PlayersEffects } from '@app/state/effects/players';
import { PlayerService } from '@app/services';

import { MatAutocompleteModule, MatIconModule, MatInputModule } from '@angular/material';

import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([PlayersEffects]),
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [PlayerService],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchModule { }
