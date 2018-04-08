import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "../components/header.component";
import { MoviesPageModule } from "../pages/moviespage.module";
import { ActorsPageModule } from "../pages/actorspage.module";
import { HomePageModule } from "../pages/homepage.module";

@NgModule({
    declarations: [
        HeaderComponent,
        LayoutComponent
    ],
    exports: [LayoutComponent, HeaderComponent],
    imports: [
        RouterModule,
        CommonModule,
        MoviesPageModule,
        ActorsPageModule,
        HomePageModule
    ]
})
export class LayoutModule {
}
