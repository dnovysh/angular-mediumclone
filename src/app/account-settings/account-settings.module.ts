import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AccountSettingsComponent} from './components/account-settings/account-settings.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "src/app/account-settings/store/reducers";


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
    RouterModule.forChild(routes),
    StoreModule.forFeature('accountSettings', reducer)
  ]
})
export class AccountSettingsModule {
}
