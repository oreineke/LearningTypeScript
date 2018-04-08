import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./homepage.component";
import { ContainerComponent, RowComponent, ColumnComponent } from "../components/grid.component";
import { CardComponent, CardImageComponent } from "../components/card.component";

@NgModule({
    declarations: [
        HomePageComponent,
        ContainerComponent,
        RowComponent,
        ColumnComponent,
        CardComponent,
        CardImageComponent
    ],
    exports: [
        HomePageComponent,
        ContainerComponent,
        RowComponent,
        ColumnComponent,
        CardComponent,
        CardImageComponent
    ],
    imports: [CommonModule, RouterModule]
})
export class HomePageModule {}
