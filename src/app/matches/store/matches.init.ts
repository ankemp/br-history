import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMatches from './matches.reducer';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {
  'matches': fromMatches.State;
}

export const reducers = {
  matches: fromMatches.reducer,
};

export const getMatchesState = createFeatureSelector<State>('matches');
export const getMatchesEntitiesState = createSelector(getMatchesState, state => state.matches);
export const getSelectedMatchId = createSelector(getMatchesEntitiesState, fromMatches.getCurrentMatchId);
export const {
  selectIds: getMatchesIds,
  selectEntities: getMatchesEntities,
  selectAll: getAllMatches,
} = fromMatches.matchesAdapter.getSelectors(getMatchesEntitiesState);
export const getSelectedMatch = createSelector(
  getMatchesEntities,
  getSelectedMatchId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
