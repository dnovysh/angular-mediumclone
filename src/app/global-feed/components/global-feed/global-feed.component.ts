import { Component, OnInit } from '@angular/core';
import {ARTICLES_API_URL} from "src/app/shared/constants/app.constant";
import {environment} from "src/environments/environment.prod";

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = environment.apiUrl + ARTICLES_API_URL

  constructor() { }

  ngOnInit(): void {
  }

}
