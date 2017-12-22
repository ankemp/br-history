import * as playersActions from '@app/state/actions/players';
import { Player } from '@app/models';

export interface State {
  ids: string[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  ids: [],
  loading: false,
  error: '',
  query: '',
};

export function reducer(state = initialState, action: playersActions.Actions): State {
  switch (action.type) {
    case playersActions.SEARCH_BY_NAME: {
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          error: '',
          query,
        };
      }

      return {
        ...state,
        loading: true,
        error: '',
        query,
      };
    }

    case playersActions.SEARCH_BY_NAME_SUCCESS: {
      return {
        ids: action.payload.map(player => player.id),
        loading: false,
        error: '',
        query: state.query,
      };
    }

    case playersActions.SEARCH_BY_NAME_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
