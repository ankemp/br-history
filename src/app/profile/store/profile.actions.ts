import { Action } from '@ngrx/store';
import { Player } from '../../models';

export const SET_CURRENT_PROFILE = '[Profile] SET CURRENT PROFILE';
export const SEARCH_BY_NAME = '[Profile] SEARCH BY NAME';
export const SEARCH_BY_NAME_SUCCESS = '[Profile] SEARCH BY NAME SUCCESS';
export const LOAD_PROFILE = '[Profile] LOAD';
export const LOAD_PROFILE_SUCCESS = '[Profile] LOAD SUCCESS';

export class SetCurrentProfile implements Action {
  readonly type = SET_CURRENT_PROFILE;
  constructor(public payload: string) { }
}

export class SearchByName implements Action {
  readonly type = SEARCH_BY_NAME;
  constructor(public payload: string) { }
}

export class SearchByNameSuccess implements Action {
  readonly type = SEARCH_BY_NAME_SUCCESS;
  constructor(public payload: Player) { }
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
  | SearchByName
  | SearchByNameSuccess
  | LoadProfile
  | LoadProfileSuccess
  ;
