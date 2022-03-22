import {createAction, props} from "@ngrx/store";

import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";
import {ModifyActionTypes} from "src/app/auth/types/modify/modify-action.types";
import {CurrentUserInputInterface} from "src/app/shared/types/current-user-input.interface";

export const updateCurrentUserAction = createAction(
  ModifyActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInputInterface }>()
)

export const updateCurrentUserSuccessAction = createAction(
  ModifyActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const updateCurrentUserFailureAction = createAction(
  ModifyActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
