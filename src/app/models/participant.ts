import { Champion, Player } from '@app/models';

export interface Participant {
  id: string;
  createdAt: Date;
  updatedAt: Date;
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

  champion: Champion;
  player: Player;
}
