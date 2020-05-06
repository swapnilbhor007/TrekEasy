import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrekListComponent } from '../treks/trek-list.component';
import { ConvertToSpacesPipe } from '../shared/pipes/convert-to-spaces.pipe';
import { TrekDetailComponent } from '../treks/trek-detail.component';
import { IdentifierGuard } from '../shared/guards/identifier.guard';
import { SharedModule } from '../shared/shared.module';
import { PackagesComponent } from '../treks/packages.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'treks', component: TrekListComponent },
      { path: 'trek/:id', canActivate: [IdentifierGuard], component: TrekDetailComponent},
      {path: 'packages', component: PackagesComponent  }
    ]),
    SharedModule
  ],
  declarations: [
    TrekListComponent,
    ConvertToSpacesPipe,
    TrekDetailComponent,
    PackagesComponent
  ]
})
export class TrekModule { }
