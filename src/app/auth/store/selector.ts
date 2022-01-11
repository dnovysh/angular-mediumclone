import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthStateInterface} from "src/app/auth/types/auth-state.interface";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector<AppStateInterface, [AuthStateInterface], boolean>(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)
