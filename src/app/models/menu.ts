import { Page } from './page';

export interface Menu {
  title: string;
  menuItem: {
    fields: Page;
  };
}
