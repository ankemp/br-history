import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Player } from '../../models';

import * as profileActions from './profile.actions';

export const profileAdapter = createEntityAdapter<Player>({
  selectId: (profile: Player) => profile.id,
  sortComparer: false
});

export interface State extends EntityState<Player> {
  currentProfileId?: string;
}

export const INIT_STATE: State = profileAdapter.getInitialState({
  currentProfileId: undefined,
});

export function reducer(state = INIT_STATE, action: profileActions.Actions) {
  switch (action.type) {
    case profileActions.SET_CURRENT_PROFILE: {
      return { ...state, currentProfileId: action.payload };
    }

    case profileActions.LOAD_PROFILE_SUCCESS: {
      return { ...state, ...profileAdapter.addOne(action.payload as Player, state), currentProfileId: action.payload.id };
    }

    default:
      return { ...state };
  }
}

export const getCurrentProfileId = (state: State) => state.currentProfileId;
