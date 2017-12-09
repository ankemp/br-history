import { Action } from '@ngrx/store';
import { Player } from '../../models/player';

export const SET_CURRENT_PROFILE = '[Profile] SET CURRENT PROFILE';
export const LOAD = '[Profile] LOAD';
export const LOAD_SUCCESS = '[Profile] LOAD SUCCESS';

export class SetCurrentProfile implements Action {
  readonly type = SET_CURRENT_PROFILE;
  constructor(public payload: string) { }
}

export class Load implements Action {
  readonly type = LOAD;
  constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: Player) { }
}

export type All =
  | SetCurrentProfile
  | Load
  | LoadSuccess
  ;
