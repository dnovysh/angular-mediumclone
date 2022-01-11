import {createAction, props} from "@ngrx/store";

import {RegisterActionTypes} from "src/app/auth/types/register-action.types";
import {RegisterRequestInterface} from "src/app/auth/types/register-request.interface";

export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{ registerRequest: RegisterRequestInterface }>()
);
