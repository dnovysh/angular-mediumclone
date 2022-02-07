import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";

import {PopularTagType} from "src/app/shared/types/popular-tag.type";
import {environment} from "src/environments/environment";
import {TAGS_API_URL} from "src/app/shared/constants/app.constant";
import {HttpClient} from "@angular/common/http";
import {PopularTagsResponseInterface} from "src/app/shared/modules/popular-tags/types/popular-tags-response.interface";


@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {
  }

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + TAGS_API_URL

    return this.http.get(url)
      .pipe(map((response: PopularTagsResponseInterface) => response.tags))
  }
}
