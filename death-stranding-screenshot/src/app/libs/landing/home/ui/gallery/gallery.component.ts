import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { DS_SCREENSHOTS_IMG_PATHS } from './constants/gellery-img-paths';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  items: GalleryItem[];
  galleryId = 'myLightbox';

  imageData = DS_SCREENSHOTS_IMG_PATHS;

  constructor(public gallery: Gallery, private lightbox: Lightbox) {
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
    galleryRef.setConfig({ nav: false, counter: false, thumb: false });
  }

  openInFullScreen(index: number) {
    this.lightbox.open(index, this.galleryId, {
      panelClass: 'fullscreen',
    });
  }
}
