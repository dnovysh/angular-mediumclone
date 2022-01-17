import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {FeedResponseInterface} from "src/app/shared/modules/feed/types/feed-response.interface";
import {environment} from "src/environments/environment";

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {
  }

  getFeed(url: string): Observable<FeedResponseInterface> {
    const fullUrl = environment.apiUrl = url

    return this.http.get<FeedResponseInterface>(fullUrl)
  }
}
