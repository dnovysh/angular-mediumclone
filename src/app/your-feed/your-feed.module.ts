import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {FeedModule} from "src/app/shared/modules/feed/feed.module";
import {BannerModule} from "src/app/shared/modules/banner/banner.module";
import {PopularTagsModule} from "src/app/shared/modules/popular-tags/popular-tags.module";
import {FeedToggleModule} from "src/app/shared/modules/feed-toggler/feed-toggle.module";
import {YourFeedComponent} from "src/app/your-feed/components/your-feed/your-feed.component";

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
]

@NgModule({
  declarations: [
    YourFeedComponent
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
export class YourFeedModule {
}
