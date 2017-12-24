import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { debounceTime, switchMap, map, skip, takeUntil, catchError } from 'rxjs/operators';

import * as teamsActions from '@state/actions/teams';
import { TeamService } from '@app/services';
import { Team } from '@app/models';

import { environment } from 'environments/environment';

@Injectable()
export class TeamsEffects {
  constructor(
    private title: Title,
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
