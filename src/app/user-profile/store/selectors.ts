import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {UserProfileStateInterface} from "src/app/user-profile/types/user-profile-state.interface";
import {ProfileInterface} from "src/app/shared/types/profile.interface";


export const userProfileFeatureSelector =
  createFeatureSelector<UserProfileStateInterface>('userProfile');

export const isLoadingSelector = createSelector<AppStateInterface, [UserProfileStateInterface], boolean>(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.isLoading
)

export const userProfileSelector = createSelector<AppStateInterface,
  [UserProfileStateInterface],
  ProfileInterface | null>(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.data
)

export const errorSelector = createSelector<AppStateInterface, [UserProfileStateInterface], string | null>(
  userProfileFeatureSelector,
  (userProfileState: UserProfileStateInterface) => userProfileState.error
)
