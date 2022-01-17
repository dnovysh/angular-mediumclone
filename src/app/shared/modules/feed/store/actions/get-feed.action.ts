import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "src/app/shared/modules/feed/store/action.types";
import {FeedResponseInterface} from "src/app/shared/modules/feed/types/feed-response.interface";

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
)

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: FeedResponseInterface }>()
)

export const getFeedFailureAction = createAction(
  ActionTypes.GET_FEED_FAILURE
)
