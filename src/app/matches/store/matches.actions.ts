import { Action } from '@ngrx/store';
import { Match } from '../../models/match';

export const SET_CURRENT_MATCH = '[Match] SET CURRENT MATCH';
export const LOAD_MATCH = '[Match] LOAD';
export const LOAD_MATCH_SUCCESS = '[Match] LOAD SUCCESS';

export const LOAD_BY_PLAYER = '[Match] LOAD BY PLAYER';
export const LOAD_BY_PLAYER_SUCCESS = '[Match] LOAD BY PLAYER SUCCESS';

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

export class LoadByPlayer implements Action {
  readonly type = LOAD_BY_PLAYER;
  constructor(public payload: string) { }
}

export class LoadByPlayerSuccess implements Action {
  readonly type = LOAD_BY_PLAYER_SUCCESS;
  constructor(public payload: Match[]) { }
}

export type Actions =
  | SetCurrentMatch
  | LoadMatch
  | LoadMatchSuccess
  | LoadByPlayer
  | LoadByPlayerSuccess
  ;
