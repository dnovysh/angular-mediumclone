import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProfileInterface} from "src/app/shared/types/profile.interface";
import {environment} from "src/environments/environment";
import {GetUserProfileResponseInterface} from "src/app/user-profile/types/get-user-profile-response.interface";

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {
  }

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`

    return this.http
      .get(url)
      .pipe(map((response: GetUserProfileResponseInterface) => response.profile))
  }
}
