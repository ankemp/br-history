import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError, retry } from 'rxjs/operators';

import * as teamsActions from '@state/actions/teams';
import * as playerActions from '@state/actions/players';
import { TeamService } from '@app/services';
import { Team } from '@app/models';

import { environment } from 'environments/environment';

@Injectable()
export class TeamsEffects {
  constructor(
    private title: Title,
    private snackBar: MatSnackBar,
    private actions$: Actions,
    private api: TeamService,
  ) { }

  @Effect()
  loadTeam$: Observable<Action> = this.actions$
    .ofType(teamsActions.LOAD_TEAM)
    .pipe(
    map((action: teamsActions.LoadTeam) => action.payload),
    switchMap((teamId: string) => this.api.get(teamId)),
    map((t: Team) => new teamsActions.LoadTeamSuccess(t))
    );

  @Effect()
  loadPlayerTeams$: Observable<Action> = this.actions$
    .ofType(playerActions.LOAD_TEAMS)
    .pipe(
    map((action: playerActions.LoadTeams) => action.payload),
    switchMap((playerId) => this.api.byPlayer(playerId)),
    map((t: Team[]) => new playerActions.LoadTeamsSuccess(t)),
    // retry(2),
    catchError((error) => of(new playerActions.LoadTeamsError(error)))
    );

  @Effect({ dispatch: false })
  loadPlayerTeamsError$: Observable<Action> = this.actions$
    .ofType(playerActions.LOAD_TEAMS_ERROR)
    .pipe(
    map((action: playerActions.LoadTeamsError) => action.payload),
    switchMap((error) => {
      this.snackBar.open('Unable to load teams', '', { horizontalPosition: 'center', duration: 2000 });
      return empty();
    })
    );

  @Effect({ dispatch: false })
  setTitle$: Observable<Action> = this.actions$
    .ofType(teamsActions.LOAD_TEAM_SUCCESS)
    .pipe(
    map((action: teamsActions.LoadTeamSuccess) => action.payload),
    switchMap((team: Team) => {
      this.title.setTitle(`${team.name} - ${environment.appTitle}`);
      return empty();
    })
    );


}
