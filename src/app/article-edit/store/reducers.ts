import {Action, createReducer, on} from "@ngrx/store";

import {ArticleEditStateInterface} from "src/app/article-edit/store/article-edit-state.interface";
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from "src/app/article-edit/store/update-article.action";
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from "src/app/article-edit/store/get-article.action";
import {routerNavigatedAction} from "@ngrx/router-store";

const initialState: ArticleEditStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
}

export const reducer = createReducer<ArticleEditStateInterface, Action>(
  initialState,
  on(updateArticleAction, (state): ArticleEditStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(updateArticleSuccessAction, (state): ArticleEditStateInterface => ({
    ...state,
    isSubmitting: false
  })),
  on(updateArticleFailureAction, (state, action): ArticleEditStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(getArticleAction, (state): ArticleEditStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getArticleSuccessAction, (state, action): ArticleEditStateInterface => ({
    ...state,
    isLoading: false,
    article: action.article
  })),
  on(getArticleFailureAction, (state): ArticleEditStateInterface => ({
    ...state,
    isLoading: false
  })),
  on(routerNavigatedAction, () => initialState)
)
