import { Participant } from './participant';

export interface Roster {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number;
  won: boolean;
  participants: Participant[];
}
