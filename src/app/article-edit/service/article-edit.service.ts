import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {ArticleInputInterface} from "src/app/shared/types/article-input.interface";
import {ArticleInterface} from "src/app/shared/types/article.interface";
import {environment} from "src/environments/environment";
import {SaveArticleResponseInterface} from "src/app/shared/types/save-article-response.interface";

@Injectable()
export class ArticleEditService {
  constructor(private http: HttpClient) {
  }

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, {article: articleInput})
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
