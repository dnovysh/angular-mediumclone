import {createAction, props} from "@ngrx/store";

import {RegisterActionTypes} from "src/app/auth/store/register.action.types";

export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{ username: string; email: string; password: string }>()
);
