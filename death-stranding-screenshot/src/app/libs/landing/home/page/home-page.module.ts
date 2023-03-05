import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { MainCtaModule } from '../ui/main-cta/main-cta.module';
import { DSGalleryModule } from '../ui/gallery/gallery.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MainCtaModule,
    DSGalleryModule,
  ],
})
export class HomePageModule {}
