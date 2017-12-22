import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromMenu from './reducers/menu';

export interface State extends fromRoot.State {
  'menu': fromMenu.State;
}

export const reducers = {
  menu: fromMenu.reducer,
};

export const getMenuState = createFeatureSelector<State>('menu');
export const getMenuEntitiesState = createSelector(getMenuState, state => state.menu);
export const {
  selectIds: getMenuNames,
  selectEntities: getMenuEntities,
  selectAll: getAllMenuItems,
} = fromMenu.menuAdapter.getSelectors(getMenuEntitiesState);
