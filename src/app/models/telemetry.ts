import { Champion } from '@app/models';

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

export interface RoundStat {
  cursor: number;
  time: number;
  round: number;
  roundLength: number;
  winningTeam: number;
  playerStats: {
    userID: string;
    kills: number;
    deaths: number;
    score: number;
    damageDone: number;
    damageReceived: number;
    healingDone: number;
    healingReceived: number;
    disablesDone: number;
    disablesReceived: number;
    energyGained: number;
    energyUsed: number;
    timeAlive: number;
    abilityUses: number;
  };
}
