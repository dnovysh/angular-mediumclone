import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {FormBuilder, FormGroup} from "@angular/forms";

import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {filter, Observable, Subscription} from "rxjs";
import {currentUserSelector} from "src/app/auth/store/selector";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";
import {errorsSelector, isSubmittingSelector} from "src/app/account-settings/store/selectors";
import {updateCurrentUserAction} from "src/app/auth/store/actions/update-current-user.action";
import {CurrentUserInputInterface} from "src/app/shared/types/current-user-input.interface";
import {logoutAction} from "src/app/auth/store/actions/logout.action";


@Component({
  selector: 'mc-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  currentUser: CurrentUserInterface
  currentUserSubscription: Subscription
  form: FormGroup
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }

  submit(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value
    }
    this.store.dispatch(updateCurrentUserAction({currentUserInput}))
  }

  logout(): void {
    this.store.dispatch(logoutAction())
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  private initializeListeners(): void {
    this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser
        this.initializeForm()
      })
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: ''
    })
  }
}
