import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import {verifyIdentityAction} from "src/app/auth/store/actions/verify-identity.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(verifyIdentityAction())
  }
}
