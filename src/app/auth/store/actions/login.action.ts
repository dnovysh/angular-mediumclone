import {createAction, props} from "@ngrx/store";

import {LoginActionTypes} from "src/app/auth/types/login/login-action.types";
import {LoginRequestInterface} from "src/app/auth/types/login/login-request.interface";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";

export const loginAction = createAction(
  LoginActionTypes.LOGIN,
  props<{ loginRequest: LoginRequestInterface }>()
)

export const loginSuccessAction = createAction(
  LoginActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  LoginActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
