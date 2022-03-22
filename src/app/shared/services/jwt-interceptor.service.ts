import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

import {PersistenceService} from "src/app/shared/services/persistence.service";
import {ACCESS_TOKEN} from "src/app/shared/constants/app.constant";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private persistenceService: PersistenceService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get(ACCESS_TOKEN)
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    })
    return next.handle(request);
  }
}
