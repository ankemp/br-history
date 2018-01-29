import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@state/menu';
import { MenuEffects } from '@state/effects/menu';
import { ContentfulService } from '@app/services';

import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { SearchModule } from '@app/search/search.module';
import { FollowModule } from '@app/follow/follow.module';
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
    SearchModule,
    FollowModule
  ],
  declarations: [HeaderComponent, MenuComponent],
  providers: [
    ContentfulService
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
