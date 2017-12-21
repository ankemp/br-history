import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromProfile from './profile.reducer';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {
  'profile': fromProfile.State;
}

export const reducers = {
  profile: fromProfile.reducer,
};

export const getProfileState = createFeatureSelector<State>('profile');
export const getProfileEntitiesState = createSelector(getProfileState, state => state.profile);
export const getSelectedProfileId = createSelector(getProfileEntitiesState, fromProfile.getCurrentProfileId);
export const {
  selectIds: getProfileIds,
  selectEntities: getProfileEntities,
  selectAll: getAllProfiles,
} = fromProfile.profileAdapter.getSelectors(getProfileEntitiesState);
export const getSelectedProfile = createSelector(
  getProfileEntities,
  getSelectedProfileId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
