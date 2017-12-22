import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@state/pages';
import { PagesEffects } from '@state/effects/pages';
import { ContentfulService } from '@app/services';

import { ShowdownModule } from 'ngx-showdown';

import { PageRoutingModule } from './page-routing.module';
import { PageResolver } from './page.resolver';

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
    ContentfulService,
    PageResolver
  ]
})
export class PageModule { }
