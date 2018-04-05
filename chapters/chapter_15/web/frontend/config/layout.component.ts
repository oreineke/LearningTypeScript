import { Component, OnInit } from "@angular/core";
import { Header } from "../components/header_component";
import { HomePage } from "../pages/home_page";
import { MoviePage } from "../pages/movies_page";
import { ActorPage } from "../pages/actors_page";
import "../stores/movie_store";
import "../stores/actor_store";

export const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@Component({
  selector: 'app-heroes',
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
  styleUrls: ['./heroes.component.css']
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
