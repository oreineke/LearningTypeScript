import { MovieInterface } from "../../universal/entities/movie";
import * as interfaces from "../interfaces";
export class MovieStore implements interfaces.MovieStore {

    // Contains the movies that have been already loaded from the server
    public movies: MovieInterface[] = [];

    // Used to represent the status of the HTTP GET calls
    public loadStatus: interfaces.Status = "pending";

    // Used to represent the status of the HTTP DELETE call
    public deleteStatus: interfaces.Status = "idle";

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    public saveStatus: interfaces.Status = "idle";

    // Used to desplay the confimation dialog before deleting a movie
    // null hides the modal and number displays the modal
    public deleteMovieId: null | number = null;

    // Used to hold the values of the movie editor or null when nothing is being edited
    public editorValue: null | Partial<MovieInterface> = null;

    public focusEditor() {
        this.editorValue = {};
    }

    public focusOutEditor() {
        this.editorValue = null;
    }

    public focusDeleteDialog(id: number) {
        this.deleteMovieId = id;
    }

    public focusOutDeleteDialog() {
        this.deleteMovieId = null;
    }

    public async getAll() {
        try {
            const response = await fetch("/api/v1/movies/", { method: "GET" });
            const movies: MovieInterface[] = await response.json();
            // We use setTimeout to simulate a slow request
            // this should allow us to see the loading component
            setTimeout(
                () => {
                    this.loadStatus = "done";
                    this.movies = movies;
                },
                1500
            );
        } catch (error) {
            this.loadStatus = "error";
        }
    }

    public edit<T extends MovieInterface, K extends keyof T>(key: K, val: T[K]) {
        const movie = {...(this.editorValue || {}), ...{[key]: val}};
        this.editorValue = movie;
    }

    public async create(movie: Partial<MovieInterface>) {
        try {
            const response = await fetch(
                "/api/v1/movies/",
                {
                    body: JSON.stringify(movie),
                    headers: {
                        "Accept": "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                }
            );
            const newMovie: MovieInterface = await response.json();
            this.loadStatus = "done";
            this.movies.push(newMovie);
            this.editorValue = null;
        } catch (error) {
            this.loadStatus = "error";
        }
    }

    public async delete(id: number) {
        try {
            const response = await fetch(`/api/v1/movies/${id}`, { method: "DELETE" });
            await response.json();
            this.deleteStatus = "done";
            this.movies = this.movies.filter((m) => m.id !== id);
            this.deleteMovieId = null;
        } catch (error) {
            this.deleteStatus = "error";
        }
    }

}
