import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { Player } from '@app/models';

@Injectable()
export class PlayerService {

  private PLAYERS_API = `${environment.apiRoot}/players`;

  constructor(
    private http: HttpClient,
  ) { }

  get(playerId: string): Observable<Player> {
    return this.http
      .get<Player>(`${this.PLAYERS_API}/${playerId}`)
      .map((response: any) => response);
  }

  search(playerName: string): Observable<Player[]> {
    return this.http
      .get<Player>(`${this.PLAYERS_API}/?name=${playerName}`)
      .map((response: any) => response.data);
  }

}
