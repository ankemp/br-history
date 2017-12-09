import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Match } from '../models/match';

@Injectable()
export class MatchService {

  private API_ROOT = 'http://localhost:3030';
  private MATCHES_API = `${this.API_ROOT}/matches`;

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
