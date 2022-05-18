import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas-services.service';
import { MovieReponsive } from '../../interfaces/movie-responsive';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-responsive';
import { PosterPipe } from '../../pipes/poster.pipe';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-peliculas-info',
  templateUrl: './peliculas-info.component.html',
  styleUrls: ['./peliculas-info.component.css']
})
export class PeliculasInfoComponent implements OnInit {

  public movieRp! : MovieReponsive;
  public cast! : Cast[];

    constructor( private ActivatedRoute : ActivatedRoute,
                private peliculas : PeliculasService,
                private location : Location,
                private router : Router ) { }

    ngOnInit(): void {

      const  { id } = this.ActivatedRoute.snapshot.params;

      this.peliculas.getPeliculaDetalles( id ).subscribe( movie => {
        //console.log( movie );
        if(!movie){
          this.router.navigateByUrl( '/home');
          return;
        }
        this.movieRp = movie;
      });

      this.peliculas.getCredits( id ).subscribe( cast => {
        console.log( cast );
        this.cast = cast.filter( actor => actor.profile_path !==   null )
      } )
  
    }
  
  onRegresar(){
    this.location.back();
  }

}
