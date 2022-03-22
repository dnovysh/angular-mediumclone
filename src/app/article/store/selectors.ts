import {createFeatureSelector, createSelector} from "@ngrx/store";

import {ArticleStateInterface} from "src/app/article/types/article-state.interface";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {ArticleInterface} from "src/app/shared/types/article.interface";


export const articleFeatureSelector = createFeatureSelector<ArticleStateInterface>('article');

export const isLoadingSelector = createSelector<AppStateInterface, [ArticleStateInterface], boolean>(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
)

export const errorSelector = createSelector<AppStateInterface, [ArticleStateInterface], string | null>(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
)

export const articleSelector =
  createSelector<AppStateInterface, [ArticleStateInterface], ArticleInterface | null>(
    articleFeatureSelector,
    (articleState: ArticleStateInterface) => articleState.data
  )
