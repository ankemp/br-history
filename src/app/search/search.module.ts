import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../profile/store/profile.init';
import { ProfileEffects } from '../profile/store/profile.effects';
import { PlayerService } from '../services/player.service';

import { MatAutocompleteModule, MatIconModule, MatInputModule } from '@angular/material';

import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects]),
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    PlayerService,
    ProfileEffects
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchModule { }
