import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private peliculas : PeliculasService ){
    
    this.peliculas.getPeliculas().subscribe( resp => {
      console.log( resp );
    } )

  }

}
