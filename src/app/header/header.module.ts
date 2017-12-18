import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './menu/store/menu.init';
import { MenuEffects } from './menu/store/menu.effects';
import { ContentfulService } from '../services/contentful.service';

import { MatToolbarModule, MatInputModule, MatIconModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('menu', reducers),
    EffectsModule.forFeature([MenuEffects]),
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [HeaderComponent],
  providers: [
    MenuEffects,
    ContentfulService
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
