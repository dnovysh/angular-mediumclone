import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {FeedModule} from "src/app/shared/modules/feed/feed.module";
import {GlobalFeedComponent} from "src/app/global-feed/components/global-feed/global-feed.component";
import {BannerModule} from "src/app/shared/modules/banner/banner.module";
import {PopularTagsModule} from "src/app/shared/modules/popular-tags/popular-tags.module";
import {FeedToggleModule} from "src/app/shared/modules/feed-toggler/feed-toggle.module";

const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  declarations: [
    GlobalFeedComponent
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
export class GlobalFeedModule {
}
