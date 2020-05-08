import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent
    ]
})

export class LayoutModule {}