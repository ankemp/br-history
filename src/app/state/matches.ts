import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromMatches from '@state/reducers/matches';
import * as fromTelemetry from '@state/reducers/telemetry';

export interface State extends fromRoot.State {
  matches: fromMatches.State;
  telemetry: fromTelemetry.State;
}

export const reducers = {
  matches: fromMatches.reducer,
  telemetry: fromTelemetry.reducer
};

export const getMatchesState = createFeatureSelector<State>('matches');
export const getMatchesEntityState = createSelector(getMatchesState, state => state.matches);
export const getSelectedMatchId = createSelector(getMatchesEntityState, fromMatches.getCurrentMatchId);
export const getMatchesLoading = createSelector(getMatchesEntityState, fromMatches.getMatchesLoading);
export const getMatchesError = createSelector(getMatchesEntityState, fromMatches.getMatchesError);
export const {
  selectEntities: getMatchesEntities,
  selectAll: getAllMatches
} = fromMatches.matchesAdapter.getSelectors(getMatchesEntityState);
export const getSelectedMatch = createSelector(
  getMatchesEntities,
  getSelectedMatchId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getMatchTelemetry = createSelector(getMatchesState, state => state.telemetry);
export const getMatchBattlerites = createSelector(getMatchTelemetry, fromTelemetry.getBattlerites);
