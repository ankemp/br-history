import { Participant } from './participant';

export interface Round {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number;
  ordinal: number;
  winningTeam: number;
}
