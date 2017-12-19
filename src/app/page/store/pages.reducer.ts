import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Page } from '../../models';

import * as pageActions from './pages.actions';

export const pageAdapter = createEntityAdapter<Page>({
  selectId: (page: Page) => page.slug,
  sortComparer: false
});

export interface State extends EntityState<Page> {
  currentPageSlug?: string;
}

export const INIT_STATE: State = pageAdapter.getInitialState({
  currentPageSlug: undefined,
});

export function reducer(state = INIT_STATE, action: pageActions.Actions) {
  switch (action.type) {
    case pageActions.SET_CURRENT_PAGE: {
      return { ...state, currentPageSlug: action.payload };
    }

    case pageActions.LOAD_PAGE_SUCCESS: {
      return { ...state, ...pageAdapter.addOne(action.payload as Page, state), currentPageSlug: action.payload.slug };
    }

    default:
      return { ...state };
  }
}

export const getCurrentPageSlug = (state: State) => state.currentPageSlug;
