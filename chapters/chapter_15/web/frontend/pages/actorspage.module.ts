import { NgModule } from "@angular/core";
import { ActorsPageComponent } from "./actorspage.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ActorsPageComponent
    ],
    exports: [ActorsPageComponent],
    imports: [CommonModule]
})
export class ActorsPageModule {
}
