import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-responsive';
import Swiper from 'swiper';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies!: Movies[];

  public mySwiper! : Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
    });
  }

  ngOnInit(): void {

     console.log(this.movies);
      
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

}



