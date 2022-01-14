import {Action, createReducer, on} from "@ngrx/store";

import {AuthStateInterface} from "src/app/auth/types/auth/auth-state.interface";
import {registerAction, registerFailureAction, registerSuccessAction} from "src/app/auth/store/actions/register.action";
import {loginAction, loginFailureAction, loginSuccessAction} from "src/app/auth/store/actions/login.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  errors: null
}

export const reducer = createReducer<AuthStateInterface, Action>(
  initialState,
  on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    errors: null
  })),
  on(registerSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    currentUser: action.currentUser,
    isLoggedIn: true
  })),
  on(registerFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    errors: action.errors
  })),
  on(loginAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    errors: null
  })),
  on(loginSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    currentUser: action.currentUser,
    isLoggedIn: true
  })),
  on(loginFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    errors: action.errors
  }))
)
