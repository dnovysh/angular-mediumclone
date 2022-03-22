import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AccountSettingsComponent} from './components/account-settings/account-settings.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "src/app/account-settings/store/reducers";
import {ErrorMessagesModule} from "src/app/shared/modules/error-messages/error-messages.module";
import {ReactiveFormsModule} from "@angular/forms";


const routes = [
  {
    path: 'settings',
    component: AccountSettingsComponent
  }
]

@NgModule({
  declarations: [
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    ErrorMessagesModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('accountSettings', reducer),
    ReactiveFormsModule
  ]
})
export class AccountSettingsModule {
}
