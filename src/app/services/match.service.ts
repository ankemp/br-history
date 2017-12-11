import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Match } from '../models/match';

@Injectable()
export class MatchService {

  private MATCHES_API = `${environment.apiRoot}/matches`;

  constructor(
    private http: HttpClient,
  ) { }

  get(matchId: string): Observable<Match> {
    return this.http
      .get<Match>(`${this.MATCHES_API}/${matchId}`)
      .map((response: any) => response as Match);
  }

  byPlayer(playerId: string, options?: any): Observable<Match[]> {
    return this.http
      .get<Match[]>(`${this.MATCHES_API}`)
      .map((response: any) => response.data as Match[]);
  }

}
