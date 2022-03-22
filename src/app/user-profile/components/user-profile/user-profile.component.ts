import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, filter, map, Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute, Params, Router} from "@angular/router";

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
  slug: string
  apiUrl: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isCurrentUserProfile$: Observable<boolean>
  
  userProfileSubscription: Subscription
  slugChangeSubscription: Subscription

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeObservables()
    this.initializeListeners()
  }

  private initializeObservables(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
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
      .subscribe((userProfile: ProfileInterface) => this.userProfile = userProfile)

    this.slugChangeSubscription = this.route.params.subscribe((params: Params) => {
      this.setValues(params['slug'])
      this.fetchData()
    })
  }

  private setValues(slug: string): void {
    const isFavorites = this.router.url.includes('favorites')
    this.slug = slug
    this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }

  private fetchData(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
    this.slugChangeSubscription.unsubscribe()
  }
}
