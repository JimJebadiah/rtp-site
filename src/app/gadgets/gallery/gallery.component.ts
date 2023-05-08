import {ChangeDetectorRef, Component, ViewChildren} from '@angular/core';
import {SlickItemDirective} from "ngx-slick-carousel";
@Component({
  selector: 'rtp-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent {

  @ViewChildren(SlickItemDirective)
  items: ReadonlyArray<SlickItemDirective> = [];

  images = [
    'https://returnofparadise.com/images/rectangle_4.png',
    'https://returnofparadise.com/images/rectangle_3.png',
    'https://returnofparadise.com/images/rectangle_2.png',
    'https://returnofparadise.com/images/rectangle_12.png',
    'https://returnofparadise.com/images/rectangle_9.png',
  ];

  slides = [
    { img: this.images[0] },
    { img: this.images[1] },
    { img: this.images[2] },
    { img: this.images[3] },
    { img: this.images[4] },
  ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  currentSlide: number = 1;

  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  init(event: any) {
    this.setCurrentSlide(event.slick.currentSlide);
  }

  change(event: any) {
    this.setCurrentSlide(event.currentSlide );
  }

  private setCurrentSlide(i: number) {
    this.currentSlide = i
    this.cdr.detectChanges();
  }

  currentSlideFunc() {
    console.log(this.currentSlide);
    return this.currentSlide;
  }
}
