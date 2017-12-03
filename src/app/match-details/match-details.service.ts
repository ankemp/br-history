import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MatchDetailsService {

  constructor(
    private db: AngularFirestore,
  ) { }

  private collection(type: string): AngularFirestoreCollection<any> {
    return this.db.collection(type);
  }

  get(type: string, id: string): Observable<any> {
    return this.collection(type).doc(id).valueChanges();
  }

}
