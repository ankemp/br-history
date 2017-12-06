import { Participant } from './participant';

export interface Round {
  id: string;
  duration: number;
  ordinal: number;
  stats: {
    winningTeam: number
  };

  participants: Participant[];
}
