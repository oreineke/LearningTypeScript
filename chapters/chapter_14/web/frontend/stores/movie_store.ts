import { MovieInterface } from "../../universal/entities/movie";
import * as mobx from "mobx";
import { provide } from "../config/ioc";
import { TYPE } from "../contants/types";

// don't allow state modifications outside actions
mobx.configure({ enforceActions: true });

const { observable, action, runInAction } = mobx;

@provide(TYPE.ActorStore)
export class MovieStore {

    @observable public movies: MovieInterface[] = [];
    @observable public status: "pending" | "error" | "done" = "pending";

    public async getAllMovies() {
        const response = await fetch("/api/v1/movies/", { method: "GET" });
        const json = await response.json();
        return json as MovieInterface[];
    }

    public async filterMoviesB(title?: string, year?: number) {

        const baseUrl = "/api/v1/movies";
        const args = [];

        if (year) {
            args.push(`?year=${year}`);
        }

        if (title) {
            if (args.length > 0) {
                args.push(`?title=${title}`);
            } else {
                args.push(`&title=${title}`);
            }
        }

        const url = `${baseUrl}${args.join("")}`;
        const response = await fetch(url, { method: "GET" });
        const json = await response.json();
        return json as MovieInterface[];

    }

    public async filterMoviesByYear(year: number) {
        const response = await fetch(`/api/v1/movies?year=${year}`, { method: "GET" });
        const json = await response.json();
        return json as MovieInterface[];
    }

    public async createMovie(movie: MovieInterface) {
        const requestBody = JSON.stringify(movie);
        const response = await fetch("/api/v1/movies/", { method: "POST", body: requestBody });
        const json = await response.json();
        return json as MovieInterface;
    }

}
