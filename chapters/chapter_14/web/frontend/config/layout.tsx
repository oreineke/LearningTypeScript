import { Route, Switch, BrowserRouter } from "react-router-dom";
import * as React from "react";
import * as ReacDOM from "react-dom";
import { Header } from "../components/header_component";
import { HomePage } from "../pages/home_page";
import { MoviePage } from "../pages/movies_page";
import { ActorPage } from "../pages/actors_page";

export const Layout = () => (
    <BrowserRouter>
        <div>
            <Header
                bg="primary"
                title="TsMovies"
                rootPath="/mobx_demo"
                links={[
                    { path: "/mobx_demo/movies", text: "Movies"},
                    { path: "/mobx_demo/actors", text: "Actors"}
                ]}
            />
            <main style={{ paddingTop: "60px" }}>
                <Switch>
                    <Route exact path="/mobx_demo" component={HomePage}/>
                    <Route path="/mobx_demo/movies" component={MoviePage}/>
                    <Route path="/mobx_demo/actors" component={ActorPage}/>
                </Switch>
            </main>
        </div>
    </BrowserRouter>
);
