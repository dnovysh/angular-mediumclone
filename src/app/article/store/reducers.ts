import {Action, createReducer, on} from "@ngrx/store";
import {routerNavigationAction} from "@ngrx/router-store";

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from "src/app/article/store/actions/get-article.action";
import {ArticleStateInterface} from "src/app/article/types/article-state.interface";

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

export const reducer = createReducer<ArticleStateInterface, Action>(
  initialState,
  on(getArticleAction, (state): ArticleStateInterface => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(getArticleSuccessAction, (state, action): ArticleStateInterface => ({
    ...state,
    isLoading: false,
    data: action.article
  })),
  on(getArticleFailureAction, (state): ArticleStateInterface => ({
    ...state,
    isLoading: false,
    data: null
  })),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
)
