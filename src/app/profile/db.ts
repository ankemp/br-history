import { DBSchema } from '@ngrx/db';

export const SCHEMA: DBSchema = {
  version: 1,
  name: 'battlelegend_battlerite',
  stores: {
    follow: {
      autoIncrement: true,
      primaryKey: 'id',
    }
  }
};
