import { Injectable } from '@angular/core';
import RxDB from 'rxdb';

import * as RxDBTypes from '@app/db.d';
const syncURL = 'http://' + window.location.hostname + ':10101/';
const doSync = window.location.hash !== '#nosync' ? true : false;

const collections = [
  {
    name: 'player',
    schema: require('../schemas/player.schema.json'),
    methods: {},
    sync: true
  }
];

@Injectable()
export class RxdbService {
  static dbPromise: Promise<RxDBTypes.Database> = null;

  private async _create(): Promise<RxDBTypes.Database> {
    console.log('DatabaseService: creating database..');
    const db: RxDBTypes.Database = await RxDB.create({
      name: 'battlelegend',
      adapter: 'idb',
    });
    console.log('DatabaseService: created database');
    db.waitForLeadership();

    // create collections
    console.log('DatabaseService: create collections');
    await Promise.all(collections.map(colData => db.collection(colData)));

    // hooks
    console.log('DatabaseService: add hooks');
    // db.collections.hero.preInsert(docObj => {
    //   const color = docObj.color;
    //   return db.collections.hero.findOne({ color }).exec()
    //     .then(has => {
    //       if (has != null) {
    //         alert('another hero already has the color ' + color);
    //         throw new Error('color already there');
    //       }
    //       return db;
    //     });
    // });

    // sync
    console.log('DatabaseService: sync');
    collections
      .filter(col => col.sync)
      .map(col => col.name)
      .forEach(colName => db[colName].sync({ remote: syncURL + colName + '/' }));

    return db;
  }

  get(): Promise<RxDBTypes.Database> {
    if (RxdbService.dbPromise) {
      return RxdbService.dbPromise;
    }

    // create database
    RxdbService.dbPromise = this._create();
    return RxdbService.dbPromise;
  }
}
