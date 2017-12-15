import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentfulContainerComponent } from './contentful-container/contentful-container.component';

const routes: Routes = [
  {
    path: ':pageSlug', component: ContentfulContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
