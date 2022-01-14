import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {RegisterRequestInterface} from "src/app/auth/types/register/register-request.interface";
import {CurrentUserInterface} from "src/app/shared/types/current-user.interface";
import {environment} from "src/environments/environment";
import {AuthResponseInterface} from "src/app/auth/types/auth/auth-response.interface";
import {LoginRequestInterface} from "src/app/auth/types/login/login-request.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register = (data: RegisterRequestInterface): Observable<CurrentUserInterface> => {
    const url = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login = (data: LoginRequestInterface): Observable<CurrentUserInterface> => {
    const url = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  private getUser = (response: AuthResponseInterface): CurrentUserInterface => response.user
}
