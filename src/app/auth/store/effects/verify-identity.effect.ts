import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";

import {AuthService} from "src/app/auth/services/auth.service";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {PersistenceService} from "src/app/shared/services/persistence.service";
import {
  verifyIdentityAction,
  verifyIdentityFailureAction,
  verifyIdentitySuccessAction
} from "src/app/auth/store/actions/verify-identity.action";
import {ACCESS_TOKEN} from "src/app/shared/constants/app.constant";

@Injectable()
export class VerifyIdentityEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService: PersistenceService) {
  }

  verifyIdentity$ = createEffect(() => this.actions$.pipe(
    ofType(verifyIdentityAction),
    switchMap(() => {
      const token = this.persistenceService.get(ACCESS_TOKEN)
      if (!token) {
        return of(verifyIdentityFailureAction())
      }
      return this.authService.verifyIdentity().pipe(
        map((currentUser: CurrentUserInterface) =>
          verifyIdentitySuccessAction({currentUser})
        ),
        catchError(() => of(verifyIdentityFailureAction()))
      )
    })
  ))
}
