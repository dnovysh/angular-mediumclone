import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {FeedComponent} from "src/app/shared/modules/feed/feed/feed.component";
import {GetFeedEffect} from "src/app/shared/modules/feed/store/effects/get-feed.effect";
import {reducer} from "src/app/shared/modules/feed/store/reducer";
import {FeedService} from "src/app/shared/modules/feed/services/feed.service";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    FeedComponent
  ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', reducer),
        RouterModule
    ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {
}
