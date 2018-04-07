/*
import { Component, OnInit } from "@angular/core";
import { Routes } from "@angular/router";
import { HomePage } from "../pages/homepage.component";
import { MoviePage } from "../pages/moviespage.component";
import { ActorPage } from "../pages/actorspage.component";
import "../stores/movie_store";
import "../stores/actor_store";

export const appRoutes: Routes = [
  { path: "", component: HomePage },
  { path: "movies", component: MoviePage },
  { path: "actors", component: ActorPage },
];

@Component({
  selector: "app-heroes",
  template: `
  <BrowserRouter>
    <div>
        <Header
            bg="primary"
            title="TsMovies"
            rootPath="/"
            links={[
                { path: "/movies", text: "Movies"},
                { path: "/actors", text: "Actors"}
            ]}
        />
        <main style="padding-top: 60px">
            <router-outlet></router-outlet>
        </main>
    </div>
</BrowserRouter>
  `,
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
    selector: "#root",
    template: "<Layout/>",
    styleUrls: [
        "../../node_modules/bootstrap/scss/bootstrap.scss"
    ]
})
export class Application {
  name: string = "World";
}
*/
