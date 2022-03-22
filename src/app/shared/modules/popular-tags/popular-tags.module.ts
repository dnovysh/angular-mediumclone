import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {PopularTagsComponent} from './components/popular-tags/popular-tags.component';
import {PopularTagsService} from "src/app/shared/modules/popular-tags/services/popular-tags.service";
import {reducers} from "src/app/shared/modules/popular-tags/store/reducers";
import {GetPopularTagsEffect} from "src/app/shared/modules/popular-tags/store/effect/get-popular-tags.effect";
import {LoadingModule} from "src/app/shared/modules/loading/loading.module";
import {ErrorMessageModule} from "src/app/shared/modules/error-message/error-message.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ],
  providers: [
    PopularTagsService
  ],
  exports: [
    PopularTagsComponent
  ]
})
export class PopularTagsModule {
}
