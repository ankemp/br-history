import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './menu/store/menu.init';
import { MenuEffects } from './menu/store/menu.effects';
import { ContentfulService } from '../services/contentful.service';

import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { SearchModule } from '../search/search.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('menu', reducers),
    EffectsModule.forFeature([MenuEffects]),
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    SearchModule
  ],
  declarations: [HeaderComponent, MenuComponent],
  providers: [
    MenuEffects,
    ContentfulService
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
