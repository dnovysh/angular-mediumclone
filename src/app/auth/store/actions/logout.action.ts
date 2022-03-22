import {createAction} from "@ngrx/store";
import {LogoutActionTypes} from "src/app/auth/types/logout/logout-action.types";

export const logoutAction = createAction(LogoutActionTypes.LOGOUT)
