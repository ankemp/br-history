import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Menu } from '../../../models';

import * as menuActions from './menu.actions';

export const menuAdapter = createEntityAdapter<Menu>({
  selectId: (menu: Menu) => menu.title,
  sortComparer: false
});

export interface State extends EntityState<Menu> { }

export const INIT_STATE: State = menuAdapter.getInitialState({});

export function reducer(state = INIT_STATE, action: menuActions.Actions) {
  switch (action.type) {
    case menuActions.LOAD_SUCCESS: {
      return { ...state, ...menuAdapter.addAll(action.payload as Menu[], state) };
    }

    default:
      return { ...state };
  }
}
