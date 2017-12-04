import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchService {

  constructor(
    private db: AngularFirestore,
  ) { }

  private matches(query?: any): AngularFirestoreCollection<any> {
    return this.db.collection('match', query);
  }

  public recent(): Observable<any[]> {
    const query = ref => ref.limit(5);
    return this.matches(query).valueChanges();
  }

}
