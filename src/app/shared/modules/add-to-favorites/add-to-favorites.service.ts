import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {ArticleInterface} from "src/app/shared/types/article.interface";
import {environment} from "src/environments/environment";
import {ArticleResponseInterface} from "src/app/shared/types/article-response.interface";


@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {
  }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)
    return this.http.post(url, {}).pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)
    return this.http.delete(url).pipe(map(this.getArticle))
  }

  private getUrl = (slug: string): string => `${environment.apiUrl}/articles/${slug}/favorite`

  private getArticle = (response: ArticleResponseInterface): ArticleInterface => response.article
}
