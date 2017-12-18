import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageResolver } from './page.resolver';
import { ContentfulContainerComponent } from './contentful-container/contentful-container.component';

const routes: Routes = [
  { path: ':pageSlug', component: ContentfulContainerComponent, resolve: { page: PageResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
