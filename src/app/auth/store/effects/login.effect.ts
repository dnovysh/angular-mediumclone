import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

import {loginAction, loginFailureAction, loginSuccessAction} from "src/app/auth/store/actions/login.action";
import {AuthService} from "src/app/auth/services/auth.service";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {PersistenceService} from "src/app/shared/services/persistence.service";
import {Router} from "@angular/router";

@Injectable()
export class LoginEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService: PersistenceService,
              private router: Router) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({loginRequest}) =>
      this.authService.login(loginRequest).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.persistenceService.set('accessToken', currentUser.token)
          return loginSuccessAction({currentUser})
        }),
        catchError((errorResponse: HttpErrorResponse) =>
          of(loginFailureAction({errors: errorResponse.error.errors}))
        )
      )
    )
  ))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => this.router.navigateByUrl('/'))
    ),
    {dispatch: false}
  )
}
