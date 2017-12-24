import { Map, Asset, Roster, Round } from '@app/models';

export interface Match {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number;
  gameMode: string;
  patchVersion: string;
  shardId: string;
  matchType: string;
  telemetry: string;
  map: Map;

  assets?: Asset[];
  rosters: Roster[];
  rounds: Round[];
}
