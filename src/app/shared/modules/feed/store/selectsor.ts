import {createFeatureSelector, createSelector} from "@ngrx/store";

import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {FeedStateInterface} from "src/app/shared/modules/feed/types/feed-state.interface";
import {FeedResponseInterface} from "src/app/shared/modules/feed/types/feed-response.interface";

export const feedFeatureSelector = createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector<AppStateInterface, [FeedStateInterface], boolean>(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const errorSelector = createSelector<AppStateInterface, [FeedStateInterface], string | null>(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
)

export const feedSelector = createSelector<AppStateInterface, [FeedStateInterface], FeedResponseInterface | null>(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
)
