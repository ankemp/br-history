import { Map } from './map';
import { Asset } from './asset';
import { Roster } from './roster';
import { Round } from './round';

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
