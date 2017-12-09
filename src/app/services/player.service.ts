import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Player } from '../models/player';

@Injectable()
export class PlayerService {

  private API_ROOT = 'http://localhost:3030';
  private PLAYERS_API = `${this.API_ROOT}/players`;

  constructor(
    private http: HttpClient,
  ) { }

  get(playerId: string): Observable<Player> {
    return this.http
      .get<Player>(`${this.PLAYERS_API}/${playerId}`)
      .map((response: any) => response.data);
  }

}
