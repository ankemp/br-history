import { Action } from '@ngrx/store';
import { Match, Telemetry } from '@app/models';

export const SET_CURRENT_MATCH = '[Match] SET CURRENT MATCH';
export const UNSET_CURRENT_MATCH = '[Match] UNSET CURRENT MATCH';
export const LOAD_MATCH = '[Match] LOAD';
export const LOAD_MATCH_SUCCESS = '[Match] LOAD SUCCESS';
export const LOAD_TELEMETRY = '[Match] LOAD TELEMETRY';
export const LOAD_TELEMETRY_SUCCESS = '[Match] LOAD TELEMETRY SUCCESS';

export class SetCurrentMatch implements Action {
  readonly type = SET_CURRENT_MATCH;
  constructor(public payload: string) { }
}

export class UnSetCurrentMatch implements Action {
  readonly type = UNSET_CURRENT_MATCH;
  constructor(public payload = null) { }
}

export class LoadMatch implements Action {
  readonly type = LOAD_MATCH;
  constructor(public payload: string) { }
}

export class LoadMatchSuccess implements Action {
  readonly type = LOAD_MATCH_SUCCESS;
  constructor(public payload: Match) { }
}

export class LoadTelemetry implements Action {
  readonly type = LOAD_TELEMETRY;
  constructor(public payload: string) { }
}

export class LoadTelemetrySuccess implements Action {
  readonly type = LOAD_TELEMETRY_SUCCESS;
  constructor(public payload: Telemetry[]) { }
}

export type Actions =
  | SetCurrentMatch
  | UnSetCurrentMatch
  | LoadMatch
  | LoadMatchSuccess
  | LoadTelemetry
  | LoadTelemetrySuccess
  ;
