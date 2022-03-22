import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {PopularTagType} from "src/app/shared/types/popular-tag.type";
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector
} from "src/app/shared/modules/popular-tags/store/selectors";
import {getPopularTagsAction} from "src/app/shared/modules/popular-tags/store/actions/get-popular-tags.action";


@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  private initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  private fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
