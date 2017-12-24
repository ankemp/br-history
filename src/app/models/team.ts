import { Player } from '@app/models';

export interface Team {
  id: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
  players: Player[];
}
