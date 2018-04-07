import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
// import "../../node_modules/bootstrap/scss/bootstrap.scss";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule// ,
        // MovieModule
        // ActorModule
    ]
})
export class AppModule {
}
