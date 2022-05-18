import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-responsive';


import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Swiper, EffectCards } from 'swiper';


SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast!: Cast[];
  
  constructor() { }

  ngOnInit(): void {
    console.log( this.cast )
  }

  ngAfterViewInit(): void {

    const swiper = new Swiper('.swiper-container', {
      slidesPerView : 5.3,
      freeMode : true,
      spaceBetween : 15
    })

  }

}
