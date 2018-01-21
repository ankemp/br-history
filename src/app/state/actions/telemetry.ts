import { Action } from '@ngrx/store';

export const LOAD_PLAYER_BATTLERITES = '[Telemetry] LOAD PLAYER BATTLERITES';
export const LOAD_ROUND_STATS = '[Telemetry] LOAD ROUND STATS';

export class LoadPlayerBattlerites implements Action {
  readonly type = LOAD_PLAYER_BATTLERITES;
  constructor(public payload: string) { }
}

export class LoadRoundStats implements Action {
  readonly type = LOAD_ROUND_STATS;
  constructor(public payload = null) { }
}

export type Actions =
  | LoadPlayerBattlerites
  | LoadRoundStats
  ;
