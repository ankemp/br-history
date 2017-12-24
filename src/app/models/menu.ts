import { Page } from '@app/models';

export interface Menu {
  title: string;
  menuItem: {
    fields: Page;
  };
}
