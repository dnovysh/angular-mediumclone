import {Action, createReducer, on} from "@ngrx/store";
import {UserProfileStateInterface} from "src/app/user-profile/types/user-profile-state.interface";
import {
  getUserProfileAction, getUserProfileFailureAction,
  getUserProfileSuccessAction
} from "src/app/user-profile/store/actions/get-user-profile.action";


const initialState: UserProfileStateInterface = {
  isLoading: false,
  data: null,
  error: null
}

export const reducer = createReducer<UserProfileStateInterface, Action>(
  initialState,
  on(getUserProfileAction, (state): UserProfileStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getUserProfileSuccessAction, (state, action): UserProfileStateInterface => ({
    ...state,
    isLoading: false,
    data: action.userProfile
  })),
  on(getUserProfileFailureAction, (state): UserProfileStateInterface => ({
    ...state,
    isLoading: false
  }))
)
