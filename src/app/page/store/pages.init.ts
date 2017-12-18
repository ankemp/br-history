import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPages from './pages.reducer';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {
  'pages': fromPages.State;
}

export const reducers = {
  pages: fromPages.reducer,
};

export const getPagesState = createFeatureSelector<State>('pages');
export const getPagesEntitiesState = createSelector(getPagesState, state => state.pages);
export const getSelectedPageSlug = createSelector(getPagesEntitiesState, fromPages.getCurrentPageSlug);
export const {
  selectIds: getPagesSlugs,
  selectEntities: getPagesEntities,
  selectAll: getAllPages,
} = fromPages.pageAdapter.getSelectors(getPagesEntitiesState);
export const getSelectedPage = createSelector(
  getPagesEntities,
  getSelectedPageSlug,
  (entities, selectedSlug) => selectedSlug && entities[selectedSlug]
);
