import { Action } from '@ngrx/store';

import { Page } from '@app/models';

export const SET_CURRENT_PAGE = '[Page] SET CURRENT PAGE';
export const LOAD_PAGE = '[Page] LOAD PAGE';
export const LOAD_PAGE_SUCCESS = '[Page] LOAD PAGE COMPLETE';

export class SetCurrentPage implements Action {
  readonly type = SET_CURRENT_PAGE;
  constructor(public payload: string) { }
}

export class LoadPage implements Action {
  readonly type = LOAD_PAGE;
  constructor(public payload: string) { }
}

export class LoadPageSuccess implements Action {
  readonly type = LOAD_PAGE_SUCCESS;
  constructor(public payload: Page) { }
}

export type Actions =
  | SetCurrentPage
  | LoadPage
  | LoadPageSuccess
  ;
