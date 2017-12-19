import { Action } from '@ngrx/store';
import { Player } from '../../models';

export const SET_CURRENT_PROFILE = '[Profile] SET CURRENT PROFILE';
export const LOAD_PROFILE = '[Profile] LOAD';
export const LOAD_PROFILE_SUCCESS = '[Profile] LOAD SUCCESS';

export class SetCurrentProfile implements Action {
  readonly type = SET_CURRENT_PROFILE;
  constructor(public payload: string) { }
}

export class LoadProfile implements Action {
  readonly type = LOAD_PROFILE;
  constructor(public payload: string) { }
}

export class LoadProfileSuccess implements Action {
  readonly type = LOAD_PROFILE_SUCCESS;
  constructor(public payload: Player) { }
}

export type Actions =
  | SetCurrentProfile
  | LoadProfile
  | LoadProfileSuccess
  ;
