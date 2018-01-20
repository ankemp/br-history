import * as matchesActions from '@state/actions/matches';
import { Telemetry } from '@app/models';

export interface State {
  telemetry: Telemetry;
  loading: boolean;
  error?: string;
}

const initialState: State = {
  telemetry: undefined,
  loading: false,
  error: undefined
};

export function reducer(state = initialState, action: matchesActions.Actions) {
  switch (action.type) {
    case matchesActions.LOAD_TELEMETRY: {
      return {
        ...state,
        telemetry: undefined,
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

export const getBattlerites = (state: State) => state.telemetry.battlerites;
export const getRoundStats = (state: State) => state.telemetry.roundStats;
