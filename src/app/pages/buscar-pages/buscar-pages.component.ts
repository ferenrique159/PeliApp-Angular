import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas-services.service';
import { Movies } from '../../interfaces/cartelera-responsive';


@Component({
  selector: 'app-buscar-pages',
  templateUrl: './buscar-pages.component.html',
  styleUrls: ['./buscar-pages.component.css']
})
export class BuscarPagesComponent implements OnInit {

  public movies : Movies[] = []
  public texto : string = '';

  constructor( private activatedRouter : ActivatedRoute,
                private services : PeliculasService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe( params => {
      this.texto = params['texto'];

      this.services.buscarPeliculas(params['texto']).subscribe( Movies => {
        this.movies = Movies;
     } )
    } )

  }



}
