import { Champion, PlayerStat, Round } from '@app/models';

export interface Telemetry {
  battlerites: { [playerId: string]: Battlerite[] };
  roundStats: RoundStat[];
}

export interface Battlerite {
  cursor: number;
  time: number;
  battlerite: object;
  loadoutType: string;
  userID: string;
  character: Champion;
}

export interface RoundStat extends Round {
  cursor: number;
  time: number;
  stats: PlayerStat[];
}
