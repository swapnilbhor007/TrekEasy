import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us.component";
import { ContactUsComponent } from "./contact-us.component";
import { SharedModule } from "../shared/shared.module";
import { ErrorComponent } from "./error.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'about-us', component: AboutUsComponent },
            { path: 'contact-us', component: ContactUsComponent }
        ]),
        SharedModule
    ],
    declarations: [
        AboutUsComponent,
        ContactUsComponent,
        ErrorComponent,
    ]
})

export class HomeModule {

}