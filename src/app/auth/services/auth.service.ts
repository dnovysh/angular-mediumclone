import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {RegisterRequestInterface} from "src/app/auth/types/register/register-request.interface";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {environment} from "src/environments/environment";
import {AuthResponseInterface} from "src/app/auth/types/auth/auth-response.interface";
import {LoginRequestInterface} from "src/app/auth/types/login/login-request.interface";
import {LOGIN_API_URL, REGISTER_API_URL, VERIFY_IDENTITY_API_URL} from "src/app/shared/constants/app.constant";
import {CurrentUserInputInterface} from "src/app/shared/types/current-user-input.interface";


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register = (data: RegisterRequestInterface): Observable<CurrentUserInterface> => {
    const url = environment.apiUrl + REGISTER_API_URL

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login = (data: LoginRequestInterface): Observable<CurrentUserInterface> => {
    const url = environment.apiUrl + LOGIN_API_URL

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  verifyIdentity(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + VERIFY_IDENTITY_API_URL

    return this.http.get(url).pipe(map(this.getUser))
  }

  updateCurrentUser(currentUserInput: CurrentUserInputInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.put(url, currentUserInput).pipe(map(this.getUser))
  }

  private getUser = (response: AuthResponseInterface): CurrentUserInterface => response.user
}
