import {Component, OnInit} from '@angular/core';
import {ARTICLES_API_URL} from "src/app/shared/constants/app.constant";


@Component({
  selector: 'mc-your-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = ARTICLES_API_URL

  constructor() {
  }

  ngOnInit(): void {
  }

}
