import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrekListComponent } from '../treks/trek-list.component';
import { TrekDetailComponent } from '../treks/trek-detail.component';
import { IdentifierGuard } from '../shared/guards/identifier.guard';
import { SharedModule } from '../shared/shared.module';
import { PackagesComponent } from '../treks/packages.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'treks', component: TrekListComponent },
      { path: 'trek/:id', canActivate: [IdentifierGuard], component: TrekDetailComponent},
      { path: 'treks/:activity', component: TrekListComponent },
      {path: 'packages', component: PackagesComponent  }
    ]),
    SharedModule
  ],
  declarations: [
    TrekListComponent,
    TrekDetailComponent,
    PackagesComponent
  ]
})
export class TrekModule { }
