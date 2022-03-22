import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {UserProfileService} from "src/app/user-profile/services/user-profile.service";
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction
} from "src/app/user-profile/store/actions/get-user-profile.action";
import {ProfileInterface} from "src/app/shared/types/profile.interface";


@Injectable()
export class GetUserProfileEffect {
  constructor(private actions$: Actions,
              private userProfileService: UserProfileService) {
  }

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({slug}) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: ProfileInterface) =>
            getUserProfileSuccessAction({userProfile})
          ),
          catchError(() => of(getUserProfileFailureAction()))
        )
      })
    ))
}
