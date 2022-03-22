import {FeedStateInterface} from "src/app/shared/modules/feed/types/feed-state.interface";
import {Action, createReducer, on} from "@ngrx/store";

import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction
} from "src/app/shared/modules/feed/store/actions/get-feed.action";
import {routerNavigatedAction, routerNavigationAction} from "@ngrx/router-store";

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
}

export const reducer = createReducer<FeedStateInterface, Action>(
  initialState,
  on(getFeedAction, (state): FeedStateInterface => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(getFeedSuccessAction, (state, action): FeedStateInterface => ({
    ...state,
    isLoading: false,
    data: action.feed
  })),
  on(getFeedFailureAction, (state): FeedStateInterface => ({
    ...state,
    isLoading: false,
    data: null
  })),
  on(routerNavigationAction, (): FeedStateInterface => initialState)
)
