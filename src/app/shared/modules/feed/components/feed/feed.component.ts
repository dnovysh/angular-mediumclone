import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {parseUrl, stringify} from "query-string";

import {getFeedAction} from "src/app/shared/modules/feed/store/actions/get-feed.action";
import {FeedResponseInterface} from "src/app/shared/modules/feed/types/feed-response.interface";
import {errorSelector, feedSelector, isLoadingSelector} from "src/app/shared/modules/feed/store/selectsor";
import {environment} from "src/environments/environment";


@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input() apiUrlProps: string

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute) {
  }

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<FeedResponseInterface | null>
  limit: number = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number
  preventAdditionalFetch: boolean

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParamMap.subscribe(
      (params: ParamMap) => {
        setTimeout(() => {
          if (!this.preventAdditionalFetch) {
            this.currentPage = Number(params.get('page') || '1')
            this.fetchFeed()
          }
        }, 0)
        this.preventAdditionalFetch = false
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue
    if (isApiUrlChanged) {
      this.currentPage = 1
      this.baseUrl = this.router.url.split('?')[0]
      this.fetchFeed()
      this.preventAdditionalFetch = true
    }
  }

  private fetchFeed(): void {
    const offset = (this.currentPage - 1) * this.limit
    const parsedUrl = parseUrl(this.apiUrlProps)
    const stringifyParams = stringify({
      ...parsedUrl.query,
      limit: this.limit,
      offset
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }
}
