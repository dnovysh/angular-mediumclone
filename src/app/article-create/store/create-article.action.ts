import {createAction, props} from "@ngrx/store";

import {ActionTypes} from "src/app/article-create/store/action.types";
import {ArticleInputInterface} from "src/app/shared/types/article-input.interface";
import {ArticleInterface} from "src/app/shared/types/article.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
)

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
