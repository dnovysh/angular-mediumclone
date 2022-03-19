import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, filter, map, Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";

import {environment} from "src/environments/environment";
import {ProfileInterface} from "src/app/shared/types/profile.interface";
import {getUserProfileAction} from "src/app/user-profile/store/actions/get-user-profile.action";
import {errorSelector, isLoadingSelector, userProfileSelector} from "src/app/user-profile/store/selectors";
import {currentUserSelector} from "src/app/auth/store/selector";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";


@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription: Subscription
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))

    const isFavorites = this.router.url.includes('favorites')
    this.apiUrl = isFavorites
      ? `${environment.apiUrl}/articles?favorited=${this.slug}`
      : `${environment.apiUrl}/articles?author=${this.slug}`

    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ]).pipe(map(([currentUser, userProfile]: [CurrentUserInterface, ProfileInterface]) =>
      currentUser.username === userProfile.username
    ))
  }

  private initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: ProfileInterface) => userProfile)
  }

  private fetchData(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }
}
