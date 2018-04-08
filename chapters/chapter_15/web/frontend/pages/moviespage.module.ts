import { NgModule } from "@angular/core";
import { MoviesPageComponent } from "./moviespage.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MoviesPageComponent
    ],
    exports: [MoviesPageComponent],
    imports: [CommonModule]
})
export class MoviesPageModule {
}
