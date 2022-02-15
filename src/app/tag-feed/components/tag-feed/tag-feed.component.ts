import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit, OnDestroy {
  apiUrl: string
  tagName: string
  activatedRouteParamsSubscription: Subscription

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouteParamsSubscription =
      this.activatedRoute.params.subscribe((params: Params) => {
        this.tagName = params['slug']
        this.apiUrl = `/articles?tag=${this.tagName}`
      })
  }

  ngOnDestroy(): void {
    this.activatedRouteParamsSubscription.unsubscribe()
  }
}
