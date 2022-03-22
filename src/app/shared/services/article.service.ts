import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {environment} from "src/environments/environment";
import {ArticleResponseInterface} from "src/app/shared/types/article-response.interface";
import {ArticleInterface} from "src/app/shared/types/article.interface";

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .get<ArticleResponseInterface>(fullUrl)
      .pipe(map(response => response.article))
  }
}
