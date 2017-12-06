import { IChampion } from './champion';
import { Player } from './player';

export interface Participant {
  actor: string;
  champion: IChampion;
  stats: {
    abilityUses: number;
    attachment: number;
    damageDone: number;
    damageReceived: number;
    deaths: number;
    disablesDone: number;
    disablesReceived: number;
    emote: number;
    energyGained: number;
    energyUsed: number;
    healingDone: number;
    healingReceived: number;
    kills: number;
    mount: number;
    outfit: number;
    score: number;
    side: number;
    timeAlive: number;
    userID: string;
  };

  player: Player;
}
