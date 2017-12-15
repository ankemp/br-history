import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Page } from '../models/page';


export const contentful = {
  space: 'hglvhaaej7q4',
  accessToken: '90cd4e4bc14fbd3c808aacc8fee5ab7916fad859a40867d8b59cece558d4f765',

  contentTypeIds: {
    page: 'page'
  }
};

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: contentful.space,
    accessToken: contentful.accessToken
  });

  constructor() { }

  getPageById(pageId: string): Promise<Entry<Page>> {
    return this.cdaClient.getEntry(pageId);
  }

  getPageBySlug(slugValue: string): Promise<Entry<Page>> {
    return this.cdaClient.getEntries({
      'content_type': contentful.contentTypeIds.page,
      'fields.slug': slugValue
    })
      .then(r => r.items.pop());
  }
}
