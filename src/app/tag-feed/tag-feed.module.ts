import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {TagFeedComponent} from './components/tag-feed/tag-feed.component';
import {FeedModule} from "src/app/shared/modules/feed/feed.module";
import {BannerModule} from "src/app/shared/modules/banner/banner.module";
import {PopularTagsModule} from "src/app/shared/modules/popular-tags/popular-tags.module";
import {FeedToggleModule} from "src/app/shared/modules/feed-toggler/feed-toggle.module";


const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent
  }
]

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    BannerModule,
    RouterModule.forChild(routes),
    PopularTagsModule,
    FeedToggleModule
  ]
})
export class TagFeedModule {
}
