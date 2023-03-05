import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryModule, LightboxModule],
  exports: [GalleryComponent],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover',
      },
    },
  ],
})
export class DSGalleryModule {}
