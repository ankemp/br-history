import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Player } from '@app/models';

import * as playersActions from '@state/actions/players';

export const playersAdapter = createEntityAdapter<Player>({
  selectId: (player: Player) => player.id,
  sortComparer: false
});

export interface State extends EntityState<Player> {
  currentPlayerId?: string;
}

export const INIT_STATE: State = playersAdapter.getInitialState({
  currentPlayerId: undefined,
});

export function reducer(state = INIT_STATE, action: playersActions.Actions) {
  switch (action.type) {
    case playersActions.SET_CURRENT_PLAYER: {
      return { ...state, currentPlayerId: action.payload };
    }

    case playersActions.LOAD_PLAYER_SUCCESS: {
      return { ...playersAdapter.addOne(action.payload as Player, state), currentPlayerId: action.payload.id };
    }

    case playersActions.SEARCH_BY_NAME_SUCCESS: {
      return { ...playersAdapter.addMany(action.payload as Player[], state) };
    }

    default:
      return state;
  }
}

export const getCurrentPlayerId = (state: State) => state.currentPlayerId;
