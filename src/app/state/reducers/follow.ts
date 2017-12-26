import * as followActions from '@state/actions/follow';

export interface State {
  ids: string[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  ids: [],
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
        ids: action.payload.map(player => player.id),
        loading: false,
        error: '',
      };
    }

    case followActions.ADD: {
      return {
        ...state,
        ids: [...state.ids, action.payload]
      };
    }

    case followActions.REMOVE: {
      return {
        ...state,
        ids: state.ids.filter(id => id !== action.payload)
      };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
