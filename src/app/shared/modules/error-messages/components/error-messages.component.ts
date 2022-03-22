import {Component, Input, OnInit} from "@angular/core";
import {BackendErrorsInterface} from "src/app/auth/types/auth/backend-errors.interface";

@Component({
  selector: 'mc-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})

export class ErrorMessagesComponent implements OnInit {
  @Input('errors') errorsProps: BackendErrorsInterface

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.errorsProps)
      .map((name: string) => `${name} ${this.errorsProps[name].join(', ')}`)
  }
}
