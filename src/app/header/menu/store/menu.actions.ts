import { Action } from '@ngrx/store';

import { Menu } from '../../../models/menu';

export const LOAD = '[Menu] LOAD';
export const LOAD_SUCCESS = '[Menu] LOAD';

export class Load implements Action {
  readonly type = LOAD;
  constructor(public payload = null) { }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: Menu[]) { }
}

export type Actions =
  | Load
  | LoadSuccess
  ;
