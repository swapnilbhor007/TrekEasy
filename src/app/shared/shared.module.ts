import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarComponent } from './components/star.component';
import { FormsModule } from '@angular/forms';
import { TimelineComponent } from './components/timeline.component';
import { BannerComponent } from '../layout/banner.component';
import { GalleryComponent } from './components/gallery.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    StarComponent,
    TimelineComponent,
    BannerComponent,
    GalleryComponent,
    ConvertToSpacesPipe
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    TimelineComponent,
    BannerComponent,
    GalleryComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
