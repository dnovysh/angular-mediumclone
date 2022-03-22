import {Action, createReducer, on} from "@ngrx/store";

import {ArticleCreateStateInterface} from "src/app/article-create/store/article-create-state.interface";
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from "src/app/article-create/store/create-article.action";

const initialState: ArticleCreateStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

export const reducer = createReducer<ArticleCreateStateInterface, Action>(
  initialState,
  on(createArticleAction, (state): ArticleCreateStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(createArticleSuccessAction, (state): ArticleCreateStateInterface => ({
    ...state,
    isSubmitting: false
  })),
  on(createArticleFailureAction, (state, action): ArticleCreateStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  }))
)
