import {AuthStateInterface} from "src/app/auth/types/auth/auth-state.interface";
import {FeedStateInterface} from "src/app/shared/modules/feed/types/feed-state.interface";
import {PopularTagsStateItnterface} from "src/app/shared/modules/popular-tags/types/popular-tags-state.itnterface";
import {ArticleStateInterface} from "src/app/article/types/article-state.interface";

export interface AppStateInterface {
  auth: AuthStateInterface,
  feed: FeedStateInterface,
  popularTags: PopularTagsStateItnterface,
  article: ArticleStateInterface
}
