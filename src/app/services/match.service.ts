import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

import { Match } from '../models/match';

@Injectable()
export class MatchService {

  private API_ROOT = environment.production ? '' : 'http://localhost:5000/br-history/us-central1';

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
  ) { }

  private matches(query?: QueryFn): AngularFirestoreCollection<Match> {
    return this.db.collection('match', query);
  }

  private recentByPlayerApi(playerId: string, toDate: string): void {
    console.log('Falling back to API', `${this.API_ROOT}/getRecentMatches?playerIds=${playerId}&toDate=${toDate}`);
    this.http.get(`${this.API_ROOT}/getRecentMatches?playerIds=${playerId}&toDate=${toDate}`);
  }

  private getMatchApi(matchId: string): void {
    this.http
      .get(`${this.API_ROOT}/getMatch?matchId=${matchId}`)
      .toPromise()
      .then(res => console.log(res));
  }

  recentByPlayer(playerId: string): Observable<Match[]> {
    const query: QueryFn = (ref) => ref.where('rosters.participants.player.id', '==', playerId).orderBy('createdAt', 'desc').limit(15);
    const compareTime = new Date();
    compareTime.setMinutes(compareTime.getMinutes() - 20);
    const doc = this.matches(query);
    doc.ref.get().then(documents => {
      console.log(documents.docs[0]);
      //   if (new Date(documents.docs[0].data().createdAt) < compareTime) {
      //     this.recentByPlayerApi(playerId, documents.docs[0].data().createdAt);
      //   }
    });
    return doc.valueChanges();
  }

  find(matchId: string): Observable<Match> {
    const doc = this.matches().doc<Match>(matchId);
    doc.ref.get().then(document => {
      if (!document.exists) {
        this.getMatchApi(matchId);
      }
    });
    return doc.valueChanges();
  }

}
