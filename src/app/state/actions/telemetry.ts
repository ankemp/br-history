import { Action } from '@ngrx/store';
import { Telemetry } from '@app/models';

export const GET_PLAYER_BATTLERITES = '[Telemetry] Get PLAYER BATTLERITES';

export class GetPlayerBattlerites implements Action {
  readonly type = GET_PLAYER_BATTLERITES;
  constructor(public payload: string) { }
}

export type Actions =
  | GetPlayerBattlerites
  ;
