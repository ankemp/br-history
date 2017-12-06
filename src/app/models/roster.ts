import { Participant } from './participant';

export interface Roster {
  id: string;
  stats: {
    score: number;
    side: number;
  };

  won: boolean;
  participants: Participant[];
  team: null;
}
