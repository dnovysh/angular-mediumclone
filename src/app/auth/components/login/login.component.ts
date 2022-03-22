import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {loginAction} from "src/app/auth/store/actions/login.action";
import {errorsSelector, isSubmittingSelector} from "src/app/auth/store/selector";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {LoginRequestInterface} from "src/app/auth/types/login/login-request.interface";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  errors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  onSubmit(): void {
    const loginRequest: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({loginRequest}))
  }
}
