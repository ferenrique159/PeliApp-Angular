import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { CarteleraResponsive, Movies } from '../interfaces/cartelera-responsive';
import { CreditsResponsive } from '../interfaces/credits-responsive';
import { MovieReponsive } from '../interfaces/movie-responsive';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl : string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando : boolean = false;

  constructor( private http : HttpClient ) {  }

  get params(){
    return{
      api_key : '17a85d2c97bc2092b55abd4a5b562692',
      language : 'es-ES',
      page : this.carteleraPage!.toString(),
    }
  }

  resetCarteleraPaige(){
    this.carteleraPage = 1;
  }

  getPeliculas():Observable<Movies[]>{
    
    if( this.cargando ){  }
    console.log('aqui carga')
    this.cargando = true;
    return this.http.get<CarteleraResponsive>(`${ this.baseUrl }/movie/now_playing`,{
      params : this.params
    }).pipe(
      map( (resp) => resp.results ),
      tap( () => { 
        this.carteleraPage +=1;
        this.cargando = false;
       }  )
    );

  }

  buscarPeliculas(texto:string):Observable<Movies[]>{
    
    const params = { ...this.params, page : '1', query : texto};

    return this.http.get<CarteleraResponsive>(`${ this.baseUrl }/search/movie`,{
      params
    }).pipe(
      map( resp => resp.results )
    )
  }

  getPeliculaDetalles( id:string ){

    return this.http.get<MovieReponsive>( ` ${ this.baseUrl }/movie/ ${ id }`, {
      params : this.params 
    }).pipe(
      catchError( err => of(null) )
    )
  }

  getCredits( id:string ){

    return this.http.get<CreditsResponsive>( ` ${ this.baseUrl }/movie/ ${ id }/credits`, {
      params : this.params 
    }).pipe(
      map( resp => resp.cast ),
      catchError( err => of([]) )
    );
  }

}
