import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";

import {FeedComponent} from "src/app/shared/modules/feed/components/feed/feed.component";
import {GetFeedEffect} from "src/app/shared/modules/feed/store/effects/get-feed.effect";
import {reducer} from "src/app/shared/modules/feed/store/reducer";
import {FeedService} from "src/app/shared/modules/feed/services/feed.service";
import {ErrorMessageModule} from "src/app/shared/modules/error-message/error-message.module";
import {LoadingModule} from "src/app/shared/modules/loading/loading.module";
import {PaginationModule} from "src/app/shared/modules/pagination/pagination.module";
import {TagListModule} from "src/app/shared/modules/tag-list/tag-list.module";


@NgModule({
  declarations: [
    FeedComponent
  ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', reducer),
        RouterModule,
        ErrorMessageModule,
        LoadingModule,
        PaginationModule,
        TagListModule
    ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {
}
