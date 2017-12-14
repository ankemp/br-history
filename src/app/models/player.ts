export interface Player {
  id: string;
  name: string;
  title: string;
  picture: string;
  createdAt?: Date;
  updatedAt?: Date;
  newestMatch: Date;
  oldestMatch: Date;
}
