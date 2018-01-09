import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { Team } from '@app/models';

@Injectable()
export class TeamService {

  private TEAMS_API = `${environment.apiRoot}/teams`;
  private TEAM_MEMBERS_API = `${environment.apiRoot}/teamMembers`;

  constructor(
    private http: HttpClient,
  ) { }

  get(teamId: string): Observable<Team> {
    return this.http.get<Team>(`${this.TEAMS_API}/${teamId}`)
      .map(response => response);
  }

  byPlayer(playerId: string, season = 6): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.TEAM_MEMBERS_API}/?playerId=${playerId}`)
      .map((response: any) => response);
  }

}
