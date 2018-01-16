import * as matchesActions from '@state/actions/matches';
import { Telemetry } from '@app/models';

export interface State {
  telemetry: Telemetry[];
  loading: boolean;
  error?: string;
}

const initialState: State = {
  telemetry: [],
  loading: false,
  error: undefined
};

export function reducer(state = initialState, action: matchesActions.Actions): State {
  switch (action.type) {
    case matchesActions.LOAD_TELEMETRY: {
      return {
        ...state,
        telemetry: [],
        loading: true,
        error: undefined
      };
    }

    case matchesActions.LOAD_TELEMETRY_SUCCESS: {
      return {
        ...state,
        telemetry: action.payload,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}
