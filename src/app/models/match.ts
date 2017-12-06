import { IMap } from './map';
import { Asset } from './asset';
import { Roster } from './roster';
import { Round } from './round';

export interface Match {
  createdAt: Date;
  duration: number;
  gameMode: string;
  patchVersion: string;
  shardId: string;
  stats: any;
  map: IMap;

  assets: Asset[];
  rosters: Roster[];
  rounds: Round[];
}
