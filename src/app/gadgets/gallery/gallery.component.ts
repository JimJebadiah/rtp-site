import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChildren} from '@angular/core';
import {SlickItemDirective} from "ngx-slick-carousel";
import {AssetService} from "../../services/asset-service";
import * as $ from "jquery";

@Component({
  selector: 'rtp-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements AfterViewInit {

  @ViewChildren(SlickItemDirective)
  items: ReadonlyArray<SlickItemDirective> = [];

  images: ReadonlyArray<string> = [];

  ngAfterViewInit() {
    this.assetSvc.loadGalleryImages().subscribe((img) => {
      this.images = img.images;
      this.slides = this.images.map((i) => {return {img: i}});
    });

  }

  slides: Array<{img: string}> = [];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };

  currentSlide: number = 1;

  constructor(private readonly cdr: ChangeDetectorRef, private readonly assetSvc: AssetService) {
  }

  init(event: any) {
    this.setCurrentSlide(event.slick.currentSlide);
    this.ngAfterViewInit();
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
