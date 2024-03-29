import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Match } from '@app/models';

import * as matchesActions from '@state/actions/matches';
import * as playerActions from '@state/actions/players';

export const matchesAdapter = createEntityAdapter<Match>({
  selectId: (match: Match) => match.id,
  sortComparer: false
});

export interface State extends EntityState<Match> {
  currentMatchId?: string;
  loading: boolean;
  error?: string;
}

export const INIT_STATE: State = matchesAdapter.getInitialState({
  currentMatchId: undefined,
  loading: false,
  error: undefined
});

export function reducer(state = INIT_STATE, action: matchesActions.Actions | playerActions.Actions) {
  switch (action.type) {
    case matchesActions.SET_CURRENT_MATCH: {
      return { ...state, currentMatchId: action.payload };
    }

    case matchesActions.UNSET_CURRENT_MATCH: {
      return { ...state, currentMatchId: undefined };
    }

    case playerActions.SET_CURRENT_PLAYER: {
      return { ...matchesAdapter.removeAll(state), currentMatchId: undefined };
    }

    case matchesActions.LOAD_MATCH_SUCCESS: {
      return { ...matchesAdapter.addOne(action.payload as Match, state), currentMatchId: action.payload.id };
    }

    case playerActions.LOAD_MATCHES: {
      return { ...state, loading: true };
    }

    case playerActions.LOAD_MATCHES_SUCCESS: {
      return { ...matchesAdapter.addAll(action.payload as Match[], state), loading: false };
    }

    case playerActions.LOAD_MATCHES_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }

    default:
      return state;
  }
}

export const getCurrentMatchId = (state: State) => state.currentMatchId;
export const getMatchesLoading = (state: State) => state.loading;
export const getMatchesError = (state: State) => state.error;
