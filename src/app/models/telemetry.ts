import { Champion, PlayerStat, Round, Battlerite } from '@app/models';

export interface Telemetry {
  battlerites: { [playerId: string]: Battlerite[] };
  roundStats: RoundStat[];
  teamUpdate: TeamUpdate[];
}

export interface RoundStat extends Round {
  cursor: number;
  startTime: Date;
  endTime: Date;
  stats: PlayerStat[];
}

export interface TeamUpdate {
  cursor: number;
  division: number;
  divisionRating: number;
  externalMatchID: string;
  league: number;
  losses: number;
  matchID: string;
  matchRegion: string;
  mode: 'UNRANKED' | 'RANKED';
  placementGamesLeft: number;
  prevDivision: number;
  prevDivisionRating: number;
  prevLeague: number;
  prevLosses: number;
  prevPlacementGamesLeft: number;
  prevWins: number;
  rankingChangeType: string;
  roundsLost: number;
  roundsWon: number;
  season: number;
  teamID: string;
  teamSize: number;
  time: number;
  userID: string;
  wins: number;
}
