import { Injectable } from '@angular/core';
import { createClient, Entry, EntryCollection } from 'contentful';
import { Page, Menu } from '@app/models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

export const contentful = {
  space: 'hglvhaaej7q4',
  accessToken: '90cd4e4bc14fbd3c808aacc8fee5ab7916fad859a40867d8b59cece558d4f765',

  contentTypeIds: {
    page: 'page',
    menu: 'menu'
  }
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: contentful.space,
    accessToken: contentful.accessToken
  });

  constructor() { }

  getMenuItems(): Observable<Menu[]> {
    return Observable.fromPromise(
      this.cdaClient.getEntries({
        'content_type': contentful.contentTypeIds.menu
      }).then(r => r.items.map(i => i.fields))
    );
  }

  getPageById(pageId: string): Promise<Entry<Page>> {
    return this.cdaClient.getEntry(pageId);
  }

  getBySlug(slugValue: string): Observable<Entry<Page>> {
    return Observable.fromPromise(
      this.cdaClient.getEntries({
        'content_type': contentful.contentTypeIds.page,
        'fields.slug': slugValue
      }).then(r => r.items.pop())
    );
  }
}
