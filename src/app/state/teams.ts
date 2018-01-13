import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromTeams from './reducers/teams';

export interface State extends fromRoot.State {
  teams: fromTeams.State;
}

export const reducers = {
  teams: fromTeams.reducer
};

export const getTeamsState = createFeatureSelector<State>('teams');
export const getTeamsEntityState = createSelector(getTeamsState, state => state.teams);
export const getSelectedTeamId = createSelector(getTeamsEntityState, fromTeams.getCurrentTeamId);
export const getTeamsLoading = createSelector(getTeamsEntityState, fromTeams.getTeamsLoading);
export const {
  selectEntities: getTeamsEntities,
  selectAll: getAllTeams
} = fromTeams.teamsAdapter.getSelectors(getTeamsEntityState);
export const getSelectedTeam = createSelector(
  getTeamsEntities,
  getSelectedTeamId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
