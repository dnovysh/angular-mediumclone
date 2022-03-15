import {Action, createReducer, on} from "@ngrx/store";

import {AccountSettingsStateInterface} from "src/app/account-settings/store/account-settings-state.interface";
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from "src/app/auth/store/actions/update-current-user.action";


const initialState: AccountSettingsStateInterface = {
  isSubmitting: false,
  errors: null
}

export const reducer = createReducer<AccountSettingsStateInterface, Action>(
  initialState,
  on(updateCurrentUserAction, (state): AccountSettingsStateInterface => ({
    ...state,
    isSubmitting: true,
    errors: null
  })),
  on(updateCurrentUserSuccessAction, (state): AccountSettingsStateInterface => ({
    ...state,
    isSubmitting: false
  })),
  on(updateCurrentUserFailureAction, (state, action): AccountSettingsStateInterface => ({
    ...state,
    isSubmitting: false,
    errors: action.errors
  }))
)
