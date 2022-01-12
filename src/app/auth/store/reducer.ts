import {Action, createReducer, on} from "@ngrx/store";

import {AuthStateInterface} from "src/app/auth/types/auth-state.interface";
import {registerAction, registerFailureAction, registerSuccessAction} from "src/app/auth/store/actions/register.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  errors: null
}

const authReducer = createReducer(
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
)

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
