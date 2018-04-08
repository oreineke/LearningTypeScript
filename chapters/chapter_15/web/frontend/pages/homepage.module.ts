import { NgModule } from "@angular/core";
import { HomePageComponent } from "./homepage.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [HomePageComponent],
    imports: [CommonModule]
})
export class HomePageModule {
}
