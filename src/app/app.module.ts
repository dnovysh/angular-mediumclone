import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";

import {environment} from "src/environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "src/app/auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TopBarModule} from "src/app/shared/modules/top-bar/top-bar.module";
import {PersistenceService} from "src/app/shared/services/persistence.service";
import {JwtInterceptor} from "src/app/shared/services/jwt-interceptor.service";
import {GlobalFeedModule} from "src/app/global-feed/global-feed.module";
import {YourFeedModule} from "src/app/your-feed/your-feed.module";
import {TagFeedModule} from "src/app/tag-feed/tag-feed.module";
import {ArticleModule} from "src/app/article/article.module";
import {ArticleCreateModule} from "src/app/article-create/article-create.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TopBarModule,
    YourFeedModule,
    TagFeedModule,
    GlobalFeedModule,
    ArticleCreateModule,
    ArticleModule,
    HttpClientModule,
    StoreModule.forRoot({router: routerReducer}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
