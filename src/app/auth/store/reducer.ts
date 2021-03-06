import {Action, createReducer, on} from "@ngrx/store";

import {AuthStateInterface} from "src/app/auth/types/auth/auth-state.interface";
import {registerAction, registerFailureAction, registerSuccessAction} from "src/app/auth/store/actions/register.action";
import {loginAction, loginFailureAction, loginSuccessAction} from "src/app/auth/store/actions/login.action";
import {
  verifyIdentityAction,
  verifyIdentityFailureAction,
  verifyIdentitySuccessAction
} from "src/app/auth/store/actions/verify-identity.action";
import {updateCurrentUserSuccessAction} from "src/app/auth/store/actions/update-current-user.action";
import {logoutAction} from "src/app/auth/store/actions/logout.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isIdentityVerifying: false,
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
  })),
  on(verifyIdentityAction, (state): AuthStateInterface => ({
    ...state,
    isIdentityVerifying: true
  })),
  on(verifyIdentitySuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isIdentityVerifying: false,
    currentUser: action.currentUser,
    isLoggedIn: true
  })),
  on(verifyIdentityFailureAction, (state): AuthStateInterface => ({
    ...state,
    isIdentityVerifying: false,
    currentUser: null,
    isLoggedIn: false
  })),
  on(updateCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    currentUser: action.currentUser
  })),
  on(logoutAction, (): AuthStateInterface => ({
    ...initialState,
    isLoggedIn: false
  }))
)
