import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Match } from '../../models/match';

import * as matchesActions from './matches.actions';

export const matchesAdapter = createEntityAdapter<Match>({
  selectId: (match: Match) => match.id,
  sortComparer: false
});

export interface State extends EntityState<Match> {
  currentMatchId?: string;
}

export const INIT_STATE: State = matchesAdapter.getInitialState({
  currentMatchId: undefined,
});

export function reducer(state = INIT_STATE, action: matchesActions.All) {
  switch (action.type) {
    case matchesActions.SET_CURRENT_MATCH: {
      return { ...state, currentMatchId: action.payload };
    }

    case matchesActions.LOAD_MATCH_SUCCESS: {
      return { ...state, ...matchesAdapter.addOne(action.payload as Match, state), currentMatchId: action.payload.id };
    }

    case matchesActions.LOAD_BY_PLAYER_SUCCESS: {
      return { ...state, ...matchesAdapter.addMany(action.payload as Match[], state) };
    }

    default:
      return { ...state };
  }
}

export const getCurrentMatchId = (state: State) => state.currentMatchId;
