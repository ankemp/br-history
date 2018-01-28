import { Champion, PlayerStat, Round, Battlerite } from '@app/models';

export interface Telemetry {
  battlerites: { [playerId: string]: Battlerite[] };
  roundStats: RoundStat[];
}

export interface RoundStat extends Round {
  cursor: number;
  time: number;
  stats: PlayerStat[];
}
