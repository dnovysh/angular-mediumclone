import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ErrorMessagesComponent} from "src/app/shared/modules/error-messages/components/error-messages.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessagesComponent],
  exports: [ErrorMessagesComponent]
})

export class ErrorMessagesModule {
}
