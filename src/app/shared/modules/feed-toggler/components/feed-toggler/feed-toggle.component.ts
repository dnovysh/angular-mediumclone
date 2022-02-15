import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";

import {isLoggedInSelector} from "src/app/auth/store/selector";

@Component({
  selector: 'mc-feed-toggle',
  templateUrl: './feed-toggle.component.html',
  styleUrls: ['./feed-toggle.component.scss']
})
export class FeedToggleComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
