import { Participant } from '@app/models';

export interface Roster {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number;
  won: boolean;
  participants: Participant[];
}
