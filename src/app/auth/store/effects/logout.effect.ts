import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {tap} from "rxjs";

import {PersistenceService} from "src/app/shared/services/persistence.service";
import {logoutAction} from "src/app/auth/store/actions/logout.action";
import {ACCESS_TOKEN} from "src/app/shared/constants/app.constant";


@Injectable()
export class LogoutEffect {
  constructor(private actions$: Actions,
              private persistenceService: PersistenceService,
              private router: Router) {
  }

  logout$ = createEffect(() => this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.persistenceService.set(ACCESS_TOKEN, '')
        this.router.navigateByUrl('/')
      })
    ),
    {dispatch: false}
  )
}
