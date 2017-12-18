import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowdownModule } from 'ngx-showdown';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/pages.init';
import { PagesEffects } from './store/pages.effects';

import { PageRoutingModule } from './page-routing.module';
import { PageResolver } from './page.resolver';
import { ContentfulService } from '../services/contentful.service';

import { ContentComponent } from './content/content.component';
import { ContentfulContainerComponent } from './contentful-container/contentful-container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pages', reducers),
    EffectsModule.forFeature([PagesEffects]),
    ShowdownModule,
    PageRoutingModule,
  ],
  declarations: [ContentComponent, ContentfulContainerComponent],
  providers: [
    PagesEffects,
    PageResolver,
    ContentfulService
  ]
})
export class PageModule { }
