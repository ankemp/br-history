import { Participant } from './participant';

export interface Round {
  duration: number;
  ordinal: number;
  stats: {
    winningTeam: number
  };

  participants: Participant[];
}
