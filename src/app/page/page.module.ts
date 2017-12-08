import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from '../services/contentful.service';
import { ContentComponent } from './content/content.component';
import { PageRoutingModule } from './page-routing.module';
import { ShowdownModule } from 'ngx-showdown';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    ShowdownModule 
  ],
  declarations: [ContentComponent],
  providers: [ContentfulService]
})
export class PageModule { }
