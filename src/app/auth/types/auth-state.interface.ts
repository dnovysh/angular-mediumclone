import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {BackendErrorsInterface} from "src/app/auth/types/backend-errors.interface";

export interface AuthStateInterface {
  isSubmitting: boolean,
  currentUser: CurrentUserInterface | null,
  isLoggedIn: boolean | null,
  errors: BackendErrorsInterface | null
}
