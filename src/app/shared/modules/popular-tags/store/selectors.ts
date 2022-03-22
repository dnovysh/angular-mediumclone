import {createFeatureSelector, createSelector} from "@ngrx/store";

import {PopularTagsStateItnterface} from "src/app/shared/modules/popular-tags/types/popular-tags-state.itnterface";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {PopularTagType} from "src/app/shared/types/popular-tag.type";


export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsStateItnterface>('popularTags');

export const popularTagsSelector =
  createSelector<AppStateInterface, [PopularTagsStateItnterface], PopularTagType[] | null>(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateItnterface) => popularTagsState.data
  )

export const isLoadingSelector =
  createSelector<AppStateInterface, [PopularTagsStateItnterface], boolean>(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateItnterface) => popularTagsState.isLoading
  )

export const errorSelector =
  createSelector<AppStateInterface, [PopularTagsStateItnterface], string | null>(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateItnterface) => popularTagsState.error
  )
