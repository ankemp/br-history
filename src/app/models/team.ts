import { Player } from '@app/models';

export interface Team {
  id: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
  teamType: 'solo' | '2v2' | '3v3';
  avatar: number;
  division: number;
  divisionRating: number;
  league: number;
  losses: number;
  placementGamesLeft: number;
  topDivision: number;
  topDivisionRating: number;
  topLeague: number;
  wins: number;
  players: Partial<Player>[];
}
