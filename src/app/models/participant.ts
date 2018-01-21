import { Champion, Player, PlayerStat } from '@app/models';

export interface Participant {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  stats: ParticipantPlayerStat;
  champion: Champion;
  player: Player;
}

interface ParticipantPlayerStat extends PlayerStat {
  attachment: number;
  emote: number;
  mount: number;
  outfit: number;
  side: number;
}
