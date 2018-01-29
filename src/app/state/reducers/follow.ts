import * as followActions from '@state/actions/follow';
import { Player } from '@app/models';

export interface State {
  players: Partial<Player>[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  players: [],
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: followActions.Actions): State {
  switch (action.type) {
    case followActions.LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    case followActions.LOAD_SUCCESS: {
      return {
        players: action.payload,
        loading: false,
        error: '',
      };
    }

    case followActions.ADD_SUCCESS: {
      return {
        ...state,
        players: [...state.players, action.payload]
      };
    }

    case followActions.REMOVE_SUCCESS: {
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.payload)
      };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.players.map(player => player.id);
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
