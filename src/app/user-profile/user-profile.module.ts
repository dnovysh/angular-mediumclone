import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";

import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UserProfileService} from "src/app/user-profile/services/user-profile.service";
import {GetUserProfileEffect} from "src/app/user-profile/store/effects/get-user-profile.effect";
import {StoreModule} from "@ngrx/store";
import {reducer} from "src/app/user-profile/store/reducers";
import {FeedModule} from "src/app/shared/modules/feed/feed.module";


const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }
]

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducer),
    FeedModule
  ],
  providers: [
    UserProfileService
  ]
})
export class UserProfileModule {
}
