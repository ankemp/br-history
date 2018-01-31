/**
 * custom typings so typescript knows about the schema-fields
 * @type {[type]}
 */
import { Player } from '@app/models';

import { RxDocument, RxCollection, RxDatabase } from 'rxdb';
import { Observable } from 'rxjs';

export type PlayerDocument = RxDocument<Partial<Player>>;

declare class PlayerCollection extends RxCollection<PlayerDocument> { }

export class Database extends RxDatabase {
  follow?: PlayerCollection;
}

declare let _default: {
  PlayerCollection,
  Database
};
export default _default;
