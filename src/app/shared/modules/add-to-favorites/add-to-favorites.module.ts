import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {AddToFavoritesComponent} from './add-to-favorites.component';
import {AddToFavoritesService} from "src/app/shared/modules/add-to-favorites/add-to-favorites.service";
import {AddToFavoritesEffect} from "src/app/shared/modules/add-to-favorites/store/add-to-favorites.effect";


@NgModule({
  declarations: [
    AddToFavoritesComponent
  ],
  providers: [
    AddToFavoritesService
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddToFavoritesEffect])
  ],
  exports: [
    AddToFavoritesComponent
  ]
})
export class AddToFavoritesModule {
}
