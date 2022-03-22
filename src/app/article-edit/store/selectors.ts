import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";
import {ArticleEditStateInterface} from "src/app/article-edit/store/article-edit-state.interface";
import {ArticleInterface} from "src/app/shared/types/article.interface";


export const editArticleFeatureSelector =
  createFeatureSelector<ArticleEditStateInterface>('articleEdit');

export const isLoadingSelector =
  createSelector<AppStateInterface, [ArticleEditStateInterface], boolean>(
    editArticleFeatureSelector,
    (state: ArticleEditStateInterface) => state.isLoading
  )

export const articleSelector =
  createSelector<AppStateInterface, [ArticleEditStateInterface], ArticleInterface>(
    editArticleFeatureSelector,
    (state: ArticleEditStateInterface) => state.article
  )

export const isSubmittingSelector =
  createSelector<AppStateInterface, [ArticleEditStateInterface], boolean>(
    editArticleFeatureSelector,
    (state: ArticleEditStateInterface) => state.isSubmitting
  )

export const errorsSelector =
  createSelector<AppStateInterface, [ArticleEditStateInterface], BackendErrorsInterface>(
    editArticleFeatureSelector,
    (state: ArticleEditStateInterface) => state.validationErrors
  )
