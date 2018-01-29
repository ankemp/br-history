import * as matchesActions from '@state/actions/matches';
import * as telemetryActions from '@state/actions/telemetry';
import { Telemetry, Battlerite, RoundStat } from '@app/models';

export interface State {
  telemetry: Telemetry;
  battlerites: Battlerite[];
  roundStats: RoundStat[];
  loading: boolean;
  error?: string;
}

const initialState: State = {
  telemetry: undefined,
  battlerites: [],
  roundStats: [],
  loading: false,
  error: undefined
};

export function reducer(state = initialState, action: matchesActions.Actions | telemetryActions.Actions) {
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

    case telemetryActions.LOAD_ROUND_STATS: {
      return {
        ...state,
        roundStats: [...state.telemetry.roundStats]
      };
    }

    case telemetryActions.LOAD_PLAYER_BATTLERITES: {
      return {
        ...state,
        battlerites: [...state.telemetry.battlerites[action.payload]]
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
export const getBattlerites = (state: State) => state.battlerites;
export const getRoundStats = (state: State) => state.roundStats;
