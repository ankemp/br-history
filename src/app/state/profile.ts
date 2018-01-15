import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '@app/reducers';
import * as fromPlayers from './reducers/players';
import * as fromTeams from './reducers/teams';
import * as fromSearch from './reducers/players-search';
import * as fromMatches from './reducers/matches';

export interface ProfileState {
  player: fromPlayers.State;
  teams: fromTeams.State;
  search: fromSearch.State;
  matches: fromMatches.State;
}

export interface State extends fromRoot.State {
  profile: ProfileState;
}

export const reducers = {
  player: fromPlayers.reducer,
  teams: fromTeams.reducer,
  search: fromSearch.reducer,
  matches: fromMatches.reducer,
};

/**
 * Profile Selectors
 */
export const getProfileState = createFeatureSelector<ProfileState>('profile');
export const getPlayerEntityState = createSelector(getProfileState, state => state.player);
export const getSelectedProfileId = createSelector(getPlayerEntityState, fromPlayers.getCurrentPlayerId);
export const {
  selectEntities: getPlayerEntities
} = fromPlayers.playersAdapter.getSelectors(getPlayerEntityState);
export const getSelectedProfile = createSelector(
  getPlayerEntities,
  getSelectedProfileId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

/**
 * Teams Selectors
 */
export const getTeamsEntityState = createSelector(getProfileState, state => state.teams);
export const getTeamsLoading = createSelector(getTeamsEntityState, fromTeams.getTeamsLoading);
export const getTeamsError = createSelector(getTeamsEntityState, fromTeams.getTeamsError);
export const {
  selectEntities: getTeamsEntities,
  selectAll: getAllTeams,
  selectIds: getTeamIds
} = fromTeams.teamsAdapter.getSelectors(getTeamsEntityState);

/**
 * Search Selectors
 */
export const getSearchState = createSelector(
  getProfileState,
  (state: ProfileState) => state.search
);
export const getSearchPlayerIds = createSelector(
  getSearchState,
  fromSearch.getIds
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);
export const getSearchResults = createSelector(
  getPlayerEntities,
  getSearchPlayerIds,
  (players, searchIds) => searchIds.map(id => players[id])
);

/**
 * Match Selectors
 */
export const getMatchesEntityState = createSelector(getProfileState, state => state.matches);
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
