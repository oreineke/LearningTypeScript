import { MovieInterface } from "../../universal/entities/movie";
import * as mobx from "mobx";
import { provide } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

const { observable, action, runInAction } = mobx;

@provide(TYPE.MovieStore)
export class MovieStore implements interfaces.MovieStore {

    // Contains the movies that have been already loaded from the server
    @observable public movies: MovieInterface[] = [];

    // Used to represent the status of the HTTP GET calls
    @observable public loadStatus: interfaces.Status = "pending";

    // Used to represent the status of the HTTP DELETE call
    @observable public deleteStatus: interfaces.Status = "idle";

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    @observable public saveStatus: interfaces.Status = "idle";

    // Used to display the movie editor: null means new movie,
    // number means existing movie and undefined means no movie
    @observable public editMovieId: number | null | undefined = undefined;

    // Used to desplay the confimation dialog before deleting a movie
    // null hides the modal and number displays the modal
    @observable public deleteMovieId: null | number = null;

    // Used to hold the values of the movie editor
    @observable public editorValue: Partial<MovieInterface> = {};

    @action
    public focusEditor(id: number | null) {
        runInAction(() => {
            this.editMovieId = id;
        });
    }

    @action
    public focusOutEditor() {
        runInAction(() => {
            this.editMovieId = undefined;
        });
    }

    @action
    public focusDeleteDialog(id: number) {
        runInAction(() => {
            this.deleteMovieId = id;
        });
    }

    @action
    public focusOutDeleteDialog() {
        runInAction(() => {
            this.deleteMovieId = null;
        });
    }

    @action
    public async getAll() {
        try {
            const response = await fetch("/api/v1/movies/", { method: "GET" });
            const movies: MovieInterface[] = await response.json();
            runInAction(() => {
                this.loadStatus = "done";
                this.movies = movies;
            });
        } catch (error) {
            runInAction(() => {
                this.loadStatus = "error";
            });
        }
    }

    @action
    public edit<T extends MovieInterface, K extends keyof T>(key: K, val: T[K]) {
        runInAction(() => {
            const movie = {...this.editorValue, ...{[key]: val}};
            this.editorValue = movie;
        });
    }

    @action
    public async create(movie: Partial<MovieInterface>) {
        try {
            const requestBody = JSON.stringify(movie);
            const response = await fetch("/api/v1/movies/", { method: "POST", body: requestBody });
            const newMovie: MovieInterface = await response.json();
            runInAction(() => {
                this.loadStatus = "done";
                this.movies.push(newMovie);
            });
        } catch (error) {
            runInAction(() => {
                this.loadStatus = "error";
            });
        }
    }

    @action
    public async delete(id: number) {
        try {
            const response = await fetch(`/api/v1/movies/:${id}`, { method: "DELETE" });
            await response.json();
            runInAction(() => {
                this.deleteStatus = "done";
                this.movies = this.movies.filter((m) => m.id !== id);
            });
        } catch (error) {
            runInAction(() => {
                this.deleteStatus = "error";
            });
        }
    }

}
