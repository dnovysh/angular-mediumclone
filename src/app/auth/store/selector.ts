import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "src/app/auth/types/auth/auth-state.interface";
import { AppStateInterface } from "src/app/shared/types/app-state.interface";
import { BackendErrorsInterface } from "src/app/auth/types/auth/backend-errors.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector<AppStateInterface, [AuthStateInterface], boolean>(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const errorsSelector = createSelector<AppStateInterface, [AuthStateInterface], BackendErrorsInterface>(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.errors
)

export const isLoggedInSelector = createSelector<AppStateInterface, [AuthStateInterface], boolean>(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
)

export const isAnonymousSelector = createSelector<AppStateInterface, [AuthStateInterface], boolean>(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false
)

export const currentUserSelector = createSelector<AppStateInterface, [AuthStateInterface], CurrentUserInterface>(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)
