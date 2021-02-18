import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarComponent } from './components/star.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { TimelineComponent } from './components/timeline.component';
import { BannerComponent } from '../layout/banner.component';
import { GalleryComponent } from './components/gallery.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import {LoginComponent} from './components/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StarComponent,
    TimelineComponent,
    BannerComponent,
    GalleryComponent,
    LoginComponent,
    ConvertToSpacesPipe
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StarComponent,
    TimelineComponent,
    BannerComponent,
    GalleryComponent,
    LoginComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
