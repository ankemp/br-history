import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatchService {

  constructor(
    private db: AngularFirestore,
  ) { }

  private get matches(): AngularFirestoreCollection<any> {
    return this.db.collection('match');
  }

  public recent(): Observable<any[]> {
    return this.matches.valueChanges();
  }

}
