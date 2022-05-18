import { Component,Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-responsive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies!: Movies[];

  constructor( private router : Router ) { }

  ngOnInit(): void {

    console.log(this.movies);
    
  }

  onMovieClick( movie : Movies ){

    this.router.navigate(['/peliculas', movie.id])

  }

}
