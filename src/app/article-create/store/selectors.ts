import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ArticleCreateStateInterface} from "src/app/article-create/store/article-create-state.interface";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";


export const createArticleFeatureSelector =
  createFeatureSelector<ArticleCreateStateInterface>('articleCreate');

export const isSubmittingSelector =
  createSelector<AppStateInterface, [ArticleCreateStateInterface], boolean>(
    createArticleFeatureSelector,
    (state: ArticleCreateStateInterface) => state.isSubmitting
  )

export const errorsSelector =
  createSelector<AppStateInterface, [ArticleCreateStateInterface], BackendErrorsInterface>(
    createArticleFeatureSelector,
    (state: ArticleCreateStateInterface) => state.validationErrors
  )
