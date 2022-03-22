import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";

export interface ArticleCreateStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
