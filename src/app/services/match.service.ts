import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { Match } from 'app/models';

@Injectable()
export class MatchService {

  private MATCHES_API = `${environment.apiRoot}/matches`;
  private PARTICIPANTS_API = `${environment.apiRoot}/participants`;
  private TELEMETRY_API = `${environment.apiRoot}/telemetry`;

  constructor(
    private http: HttpClient,
  ) { }

  get(matchId: string): Observable<Match> {
    return this.http
      .get<Match>(`${this.MATCHES_API}/${matchId}`)
      .map((response: any) => response as Match);
  }

  getTelemetry(matchId: string): Observable<any> {
    return this.http.get(`${this.TELEMETRY_API}/${matchId}`);
  }

  byPlayer(playerId: string, options?: any): Observable<Match[]> {
    return this.http
      .get<Match[]>(`${this.PARTICIPANTS_API}?playerId=${playerId}`)
      .map((response: any) => response.data as Match[]);
  }

}
