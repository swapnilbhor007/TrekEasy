import { Component, OnInit, Input } from '@angular/core';
// import { Gallery, GalleryItem } from '@ngx-gallery/core';
// import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  // items: GalleryItem[];
  // @Input() images: string[];
  // galleryId = 'myLightbox';

  @Input() showModal: boolean;
  @Input() imageUrls: [string] = [""];
  slideIndex: number = 1;

  // constructor(public gallery: Gallery, private lightbox: Lightbox) { }

   ngOnInit() {
  //   // Load items into gallery
  //   const galleryRef = this.gallery.ref(this.galleryId);
  //   galleryRef.load(this.items);

  }
  // openInFullScreen(index: number) {
  //   this.lightbox.open(index, this.galleryId, {
  //     panelClass: 'fullscreen'
  //   });
  // }

  

  moveSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n) {
    var slides = document.getElementsByClassName("carousel-item");

    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }

    for (var i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
    }
    //console.log("slide index: ", this.slideIndex);
    slides[this.slideIndex - 1].className += " active";
  }

  show() {
    this.showModal = true;
    //this.slideIndex = 1;
  }

  hide() {
    this.showModal = false;
    //this.slideIndex = 1;
  }

}