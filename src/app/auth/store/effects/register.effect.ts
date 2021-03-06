import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

import {registerAction, registerFailureAction, registerSuccessAction}
  from "src/app/auth/store/actions/register.action";
import {AuthService} from "src/app/auth/services/auth.service";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {PersistenceService} from "src/app/shared/services/persistence.service";
import {ACCESS_TOKEN} from "src/app/shared/constants/app.constant";

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService: PersistenceService,
              private router: Router) {
  }

  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({registerRequest}) =>
      this.authService.register(registerRequest).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.persistenceService.set(ACCESS_TOKEN, currentUser.token)
          return registerSuccessAction({currentUser})
        }),
        catchError((errorResponse: HttpErrorResponse) =>
          of(registerFailureAction({errors: errorResponse.error.errors}))
        )
      )
    )
  ))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
      ofType(registerSuccessAction),
      tap(() => this.router.navigateByUrl('/'))
    ),
    {dispatch: false}
  )
}
