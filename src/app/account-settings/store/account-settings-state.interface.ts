import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";

export interface AccountSettingsStateInterface {
  isSubmitting: boolean
  errors: BackendErrorsInterface | null
}
