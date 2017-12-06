import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Match } from '../models/match';

@Injectable()
export class MatchService {

  constructor(
    private db: AngularFirestore,
  ) { }

  private matches(query?: QueryFn): AngularFirestoreCollection<Match> {
    return this.db.collection('match', query);
  }

  public recent(playerId: string): Observable<Match[]> {
    const query: QueryFn = (ref) => ref.where('rosters.participants.player.id', '==', playerId).orderBy('createdAt', 'desc').limit(5);
    return this.matches().valueChanges();
  }

}
