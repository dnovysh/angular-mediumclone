import {createAction, props} from "@ngrx/store";

import {RegisterActionTypes} from "src/app/auth/types/register/register-action.types";
import {RegisterRequestInterface} from "src/app/auth/types/register/register-request.interface";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";

export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{ registerRequest: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  RegisterActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  RegisterActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
