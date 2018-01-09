import { Action } from '@ngrx/store';
import { Team } from '@app/models';

export const SET_CURRENT_TEAM = '[Teams] SET CURRENT TEAM';
export const LOAD_TEAM = '[Teams] LOAD TEAM';
export const LOAD_TEAM_SUCCESS = '[Teams] LOAD TEAM SUCCESS';

export class SetCurrentTeam implements Action {
  readonly type = SET_CURRENT_TEAM;
  constructor(public payload: string) { }
}

export class LoadTeam implements Action {
  readonly type = LOAD_TEAM;
  constructor(public payload: string) { }
}

export class LoadTeamSuccess implements Action {
  readonly type = LOAD_TEAM_SUCCESS;
  constructor(public payload: Team) { }
}

export type Actions =
  | SetCurrentTeam
  | LoadTeam
  | LoadTeamSuccess
  ;
