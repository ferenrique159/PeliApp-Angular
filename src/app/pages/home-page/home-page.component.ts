import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'; 
import { PeliculasService } from '../../services/peliculas-services.service';
import { Movies } from 'src/app/interfaces/cartelera-responsive';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  public movies : Movies[] = []
  public moviesSlideshow : Movies[] = []
  

  @HostListener('window:scroll', ['$event'])
  onScroll(){

    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 1300 ;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    
  if ( pos > max ){
    if ( this.peliculas.cargando ) { return; }
    this.peliculas.getPeliculas().subscribe( movies => {
      this.movies.push(...movies);
    } )
   
  }

    
  }

  constructor( private peliculas:PeliculasService ) { }

  ngOnInit(): void {

    this.peliculas.getPeliculas().subscribe( movies => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    } )

  }

  ngOnDestroy(): void {
    this.peliculas.resetCarteleraPaige();
  }

}
