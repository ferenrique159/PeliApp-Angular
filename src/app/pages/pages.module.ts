import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PeliculasInfoComponent } from './peliculas-info/peliculas-info.component';
import { BuscarPagesComponent } from './buscar-pages/buscar-pages.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    HomePageComponent,
    PeliculasInfoComponent,
    BuscarPagesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
