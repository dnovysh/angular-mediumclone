import {FeedResponseInterface} from "src/app/shared/modules/feed/types/feed-response.interface";

export interface FeedStateInterface {
  isLoading: boolean,
  error: string | null,
  data: FeedResponseInterface | null
}
