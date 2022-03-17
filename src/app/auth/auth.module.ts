import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {RegisterComponent} from "src/app/auth/components/register/register.component";
import {reducer} from "src/app/auth/store/reducer";
import {AuthService} from "src/app/auth/services/auth.service";
import {RegisterEffect} from "src/app/auth/store/effects/register.effect";
import {ErrorMessagesModule} from "src/app/shared/modules/error-messages/error-messages.module";
import {PersistenceService} from "src/app/shared/services/persistence.service";
import {LoginEffect} from "src/app/auth/store/effects/login.effect";
import {LoginComponent} from "src/app/auth/components/login/login.component";
import {VerifyIdentityEffect} from "src/app/auth/store/effects/verify-identity.effect";
import {UpdateCurrentUserEffect} from "src/app/auth/store/effects/update-current-user.effect";
import {LogoutEffect} from "src/app/auth/store/effects/logout.effect";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      VerifyIdentityEffect,
      UpdateCurrentUserEffect,
      LogoutEffect
    ]),
    ErrorMessagesModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    PersistenceService
  ]
})
export class AuthModule {
}
