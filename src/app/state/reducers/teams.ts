import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Team } from '@app/models';

import * as teamsActions from '@state/actions/teams';
import * as playersActions from '@state/actions/players';

export const teamsAdapter = createEntityAdapter<Team>({
  selectId: (team: Team) => team.id,
  sortComparer: false
});

export interface State extends EntityState<Team> {
  currentTeamId?: string;
  loading: boolean;
  error?: string;
}

export const INIT_STATE: State = teamsAdapter.getInitialState({
  currentTeamId: undefined,
  loading: false,
  error: undefined
});

export function reducer(state = INIT_STATE, action: teamsActions.Actions | playersActions.Actions) {
  switch (action.type) {
    case teamsActions.SET_CURRENT_TEAM: {
      return { ...state, currentTeamId: action.payload };
    }

    case playersActions.SET_CURRENT_PLAYER: {
      return { ...teamsAdapter.removeAll(state), currentTeamId: undefined };
    }

    case teamsActions.LOAD_TEAM_SUCCESS: {
      return { ...teamsAdapter.addOne(action.payload as Team, state), currentTeamId: action.payload.id };
    }

    case playersActions.LOAD_TEAMS: {
      return { ...state, loading: true };
    }

    case playersActions.LOAD_TEAMS_SUCCESS: {
      return { ...teamsAdapter.addMany(action.payload as Team[], state), loading: false };
    }

    case playersActions.LOAD_TEAMS_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }

    default:
      return state;
  }
}

export const getCurrentTeamId = (state: State) => state.currentTeamId;
export const getTeamsLoading = (state: State) => state.loading;
export const getTeamsError = (state: State) => state.error;
