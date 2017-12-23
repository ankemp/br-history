import { Action } from '@ngrx/store';
import { Match } from '@app/models';

export const SET_CURRENT_MATCH = '[Match] SET CURRENT MATCH';
export const LOAD_MATCH = '[Match] LOAD';
export const LOAD_MATCH_SUCCESS = '[Match] LOAD SUCCESS';

export class SetCurrentMatch implements Action {
  readonly type = SET_CURRENT_MATCH;
  constructor(public payload: string) { }
}

export class LoadMatch implements Action {
  readonly type = LOAD_MATCH;
  constructor(public payload: string) { }
}

export class LoadMatchSuccess implements Action {
  readonly type = LOAD_MATCH_SUCCESS;
  constructor(public payload: Match) { }
}

export type Actions =
  | SetCurrentMatch
  | LoadMatch
  | LoadMatchSuccess
  ;