import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPagesComponent } from './pages/buscar-pages/buscar-pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PeliculasInfoComponent } from './pages/peliculas-info/peliculas-info.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path : 'home',
    component : HomePageComponent
  },
  {
    path : 'peliculas/:id',
    component : PeliculasInfoComponent
  },
  {
    path : 'buscar/:texto',
    component : BuscarPagesComponent
  },
  {
    path : '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
