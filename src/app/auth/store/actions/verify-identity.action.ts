import {createAction, props} from "@ngrx/store";

import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {VerifyIdentityActionTypes} from "src/app/auth/types/identity/verify-identity-action.types";

export const verifyIdentityAction = createAction(
  VerifyIdentityActionTypes.VERIFY_IDENTITY
)

export const verifyIdentitySuccessAction = createAction(
  VerifyIdentityActionTypes.VERIFY_IDENTITY_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const verifyIdentityFailureAction = createAction(
  VerifyIdentityActionTypes.VERIFY_IDENTITY_FAILURE
)
