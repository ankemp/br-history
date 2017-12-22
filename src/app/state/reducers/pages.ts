import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Page } from '@app/models';

import * as pagesActions from '@state/actions/pages';

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

export function reducer(state = INIT_STATE, action: pagesActions.Actions) {
  switch (action.type) {
    case pagesActions.SET_CURRENT_PAGE: {
      return { ...state, currentPageSlug: action.payload };
    }

    case pagesActions.LOAD_PAGE_SUCCESS: {
      return { ...pageAdapter.addOne(action.payload as Page, state), currentPageSlug: action.payload.slug };
    }

    default:
      return state;
  }
}

export const getCurrentPageSlug = (state: State) => state.currentPageSlug;
