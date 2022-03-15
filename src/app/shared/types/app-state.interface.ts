import {AuthStateInterface} from "src/app/auth/types/auth/auth-state.interface";
import {FeedStateInterface} from "src/app/shared/modules/feed/types/feed-state.interface";
import {PopularTagsStateItnterface} from "src/app/shared/modules/popular-tags/types/popular-tags-state.itnterface";
import {ArticleStateInterface} from "src/app/article/types/article-state.interface";
import {ArticleCreateStateInterface} from "src/app/article-create/store/article-create-state.interface";
import {ArticleEditStateInterface} from "src/app/article-edit/store/article-edit-state.interface";
import {AccountSettingsStateInterface} from "src/app/account-settings/store/account-settings-state.interface";

export interface AppStateInterface {
  auth: AuthStateInterface
  accountSettings: AccountSettingsStateInterface
  feed: FeedStateInterface
  popularTags: PopularTagsStateItnterface
  article: ArticleStateInterface
  articleCreate: ArticleCreateStateInterface
  articleEdit: ArticleEditStateInterface
}
