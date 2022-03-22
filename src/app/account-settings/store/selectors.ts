import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthStateInterface} from "src/app/auth/types/auth/auth-state.interface";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";
import {AccountSettingsStateInterface} from "src/app/account-settings/store/account-settings-state.interface";

export const accountSettingsFeatureSelector =
  createFeatureSelector<AccountSettingsStateInterface>('accountSettings');

export const isSubmittingSelector = createSelector<AppStateInterface, [AccountSettingsStateInterface], boolean>(
  accountSettingsFeatureSelector,
  (state: AccountSettingsStateInterface) => state.isSubmitting
)

export const errorsSelector =
  createSelector<AppStateInterface, [AccountSettingsStateInterface], BackendErrorsInterface>(
    accountSettingsFeatureSelector,
    (state: AuthStateInterface) => state.errors
  )
