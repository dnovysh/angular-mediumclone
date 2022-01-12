import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {registerAction} from "src/app/auth/store/actions/register.action";
import {errorsSelector, isSubmittingSelector} from "src/app/auth/store/selector";
import {AppStateInterface} from "src/app/shared/types/app-state.interface";
import {RegisterRequestInterface} from "src/app/auth/types/register-request.interface";
import {BackendErrorsInterface} from "src/app/auth/types/backend-errors.interface";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: '',
      password: ''
    })
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  onSubmit(): void {
    const registerRequest: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({registerRequest}))
  }
}
