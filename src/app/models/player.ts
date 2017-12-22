export interface Player {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  newestMatch?: Date;
  oldestMatch?: Date;
  stats?: any;
}
