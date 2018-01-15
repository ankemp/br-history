import { Action } from '@ngrx/store';
import { Player, Match, Team } from '@app/models';

export const SET_CURRENT_PLAYER = '[Players] SET CURRENT PLAYER';
export const SEARCH_BY_NAME = '[Players] SEARCH BY NAME';
export const SEARCH_BY_NAME_SUCCESS = '[Players] SEARCH BY NAME SUCCESS';
export const SEARCH_BY_NAME_ERROR = '[Players] SEARCH BY NAME ERROR';
export const LOAD_PLAYER = '[Players] LOAD PLAYER';
export const LOAD_PLAYER_SUCCESS = '[Players] LOAD PLAYER SUCCESS';
export const LOAD_MATCHES = '[Players] LOAD MATCHES';
export const LOAD_MATCHES_SUCCESS = '[Players] LOAD MATCHES SUCCESS';
export const LOAD_MATCHES_ERROR = '[Players] LOAD MATCHES ERROR';
export const LOAD_TEAMS = '[Players] LOAD TEAMS';
export const LOAD_TEAMS_SUCCESS = '[Players] LOAD TEAMS SUCCESS';
export const LOAD_TEAMS_ERROR = '[Players] LOAD TEAMS ERROR';

export class SetCurrentPlayer implements Action {
  readonly type = SET_CURRENT_PLAYER;
  constructor(public payload: string) { }
}

export class SearchByName implements Action {
  readonly type = SEARCH_BY_NAME;
  constructor(public payload: string) { }
}

export class SearchByNameSuccess implements Action {
  readonly type = SEARCH_BY_NAME_SUCCESS;
  constructor(public payload: Player[]) { }
}

export class SearchByNameError implements Action {
  readonly type = SEARCH_BY_NAME_ERROR;
  constructor(public payload: string) { }
}

export class LoadPlayer implements Action {
  readonly type = LOAD_PLAYER;
  constructor(public payload: string) { }
}

export class LoadPlayerSuccess implements Action {
  readonly type = LOAD_PLAYER_SUCCESS;
  constructor(public payload: Player) { }
}

export class LoadMatches implements Action {
  readonly type = LOAD_MATCHES;
  constructor(public payload: string) { }
}

export class LoadMatchesSuccess implements Action {
  readonly type = LOAD_MATCHES_SUCCESS;
  constructor(public payload: Match[]) { }
}

export class LoadMatchesError implements Action {
  readonly type = LOAD_MATCHES_ERROR;
  constructor(public payload: string) { }
}

export class LoadTeams implements Action {
  readonly type = LOAD_TEAMS;
  constructor(public payload: string) { }
}

export class LoadTeamsSuccess implements Action {
  readonly type = LOAD_TEAMS_SUCCESS;
  constructor(public payload: Team[]) { }
}

export class LoadTeamsError implements Action {
  readonly type = LOAD_TEAMS_ERROR;
  constructor(public payload: string) { }
}

export type Actions =
  | SetCurrentPlayer
  | SearchByName
  | SearchByNameSuccess
  | SearchByNameError
  | LoadPlayer
  | LoadPlayerSuccess
  | LoadMatches
  | LoadMatchesSuccess
  | LoadMatchesError
  | LoadTeams
  | LoadTeamsSuccess
  | LoadTeamsError
  ;
