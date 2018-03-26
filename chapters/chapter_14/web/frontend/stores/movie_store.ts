import { MovieInterface } from "../../universal/entities/movie";
import * as mobx from "mobx";
import { provide } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

const { observable, action, runInAction } = mobx;

@provide(TYPE.MovieStore)
export class MovieStore implements interfaces.MovieStore {

    @observable public movies: MovieInterface[] = [];
    @observable public status: interfaces.Status = "pending";

    @action
    public async getAllMovies() {
        try {
            const response = await fetch("/api/v1/movies/", { method: "GET" });
            const movies: MovieInterface[] = await response.json();
            runInAction(() => {
                this.status = "done";
                this.movies = movies;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    @action
    public async filterMovies(title?: string, year?: number) {
        try {
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
            const movies: MovieInterface[] = await response.json();
            runInAction(() => {
                this.status = "done";
                this.movies = movies;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    @action
    public async filterMoviesByYear(year: number) {
        try {
            const response = await fetch(`/api/v1/movies?year=${year}`, { method: "GET" });
            const movies: MovieInterface[] = await response.json();
            runInAction(() => {
                this.status = "done";
                this.movies = movies;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    @action
    public async createMovie(movie: MovieInterface) {
        try {
            const requestBody = JSON.stringify(movie);
            const response = await fetch("/api/v1/movies/", { method: "POST", body: requestBody });
            const newMovie: MovieInterface = await response.json();
            runInAction(() => {
                this.status = "done";
                this.movies.push(newMovie);
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

}
