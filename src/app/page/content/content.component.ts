import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Page } from '../../models/page';
import { Entry } from 'contentful';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'brh-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  private routeSub: Subscription;
  public page:string;
  public contentPage: Page;

  constructor(private content: ContentfulService,private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.page = params['pageId'];
    });

    this.content.getPageBySlug(this.page)
      .then(p=> this.contentPage = p.fields);
  }

}
