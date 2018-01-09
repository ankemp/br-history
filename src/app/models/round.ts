import { Participant } from '@app/models';

export interface Round {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number;
  ordinal: number;
  winningTeam: number;
}
