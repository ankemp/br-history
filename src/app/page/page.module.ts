import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from '../services/contentful.service';
import { ContentComponent } from './content/content.component';
import { PageRoutingModule } from './page-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [ContentComponent],
  providers: [ContentfulService]
})
export class PageModule { }
