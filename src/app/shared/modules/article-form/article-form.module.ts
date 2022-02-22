import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {ArticleFormComponent} from 'src/app/shared/modules/article-form/article-form.component';
import {ErrorMessagesModule} from "src/app/shared/modules/error-messages/error-messages.module";


@NgModule({
  declarations: [
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessagesModule
  ],
  exports: [
    ArticleFormComponent
  ]
})
export class ArticleFormModule {
}
