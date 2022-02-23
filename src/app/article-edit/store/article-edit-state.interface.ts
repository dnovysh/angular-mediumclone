import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";
import {ArticleInterface} from "src/app/shared/types/article.interface";

export interface ArticleEditStateInterface {
  isLoading: boolean
  article: ArticleInterface | null
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
