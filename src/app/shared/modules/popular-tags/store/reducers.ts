import {Action, createReducer, on} from "@ngrx/store";

import {PopularTagsStateItnterface} from "src/app/shared/modules/popular-tags/types/popular-tags-state.itnterface";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "src/app/shared/modules/popular-tags/store/actions/get-popular-tags.action";


const initialState: PopularTagsStateItnterface = {
  data: null,
  error: null,
  isLoading: false
}

export const reducers = createReducer<PopularTagsStateItnterface, Action>(
  initialState,
  on(getPopularTagsAction, (state): PopularTagsStateItnterface => ({
    ...state,
    error: null,
    isLoading: true
  })),
  on(getPopularTagsSuccessAction, (state, action): PopularTagsStateItnterface => ({
    ...state,
    data: action.popularTags,
    isLoading: false
  })),
  on(getPopularTagsFailureAction, (state): PopularTagsStateItnterface => ({
    ...state,
    isLoading: false
  }))
)
