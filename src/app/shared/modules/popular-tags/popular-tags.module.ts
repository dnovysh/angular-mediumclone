import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import {PopularTagsService} from "src/app/shared/modules/popular-tags/services/popular-tags.service";


@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PopularTagsService
  ]
})
export class PopularTagsModule { }
