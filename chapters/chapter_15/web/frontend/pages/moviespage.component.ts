import { Component, OnInit, Inject } from "@angular/core";
import { MovieInterface } from "../../universal/entities/movie";
import * as interfaces from "../interfaces";
import { MOVIE_SERVICE } from "../config/types";

function isValidNewMovie(o: any) {
    if (
        o === null ||
        o === undefined ||
        // new movies don't have ID
        o.id !== undefined ||
        typeof o.title !== "string" ||
        isNaN(o.year)
    ) {
        return false;
    }
    return true;
}

@Component({
    selector: "movies-page",
    template: `
        <app-container>
            <app-row>
                <app-column width="12">
                    <div style="text-align: right; margin-bottom: 10px">
                        <app-button (clicked)="focusEditor()">
                            Add Movie
                        </app-button>
                    </div>
                </app-column>
            </app-row>
            <app-row>
                <app-column width="12">
                    <app-list-group [isLoading]="loadStatus === 'pending'">
                        <app-list-group-item *ngFor="let movie of movies">
                            <app-row>
                                <app-column width="8">
                                    <h5>{{movie.title}}</h5>
                                    <p>{{movie.year}}</p>
                                </app-column>
                                <app-column width="4" style="text-align: right">
                                    <app-button kind="danger" clicked="focusDeleteDialog(movie.id)">
                                        Delete
                                    </app-button>
                                </app-column>
                            </app-row>
                        </app-list-group-item>
                    </app-list-group>
                </app-column>
            </app-row>
            <div *ngIf="editorValue">
                <form>
                    Display editor modal!
                </form>
            </div>
            <div *ngIf="deleteMovieId">
                Display confirmation modal!
            </div>
        </app-container>
    `
})
export class MoviesPageComponent implements OnInit {

    // Contains the movies that have been already loaded from the server
    public movies: MovieInterface[];

    // Used to represent the status of the HTTP GET calls
    public loadStatus: interfaces.Status;

    // Used to represent the status of the HTTP DELETE call
    public deleteStatus: interfaces.Status;

    // Used to represent the status of the HTTP POST and HTTP PUT calls
    public saveStatus: interfaces.Status;

    // Used to desplay the confimation dialog before deleting a movie
    // null hides the modal and number displays the modal
    public deleteMovieId: null | number;

    // Used to hold the values of the movie editor or null when nothing is being edited
    public editorValue: null | Partial<MovieInterface>;

    public movieService!: interfaces.MovieService;

    public constructor(
        @Inject(MOVIE_SERVICE) movieService: interfaces.MovieService
    ) {
        this.movieService = movieService;
        this.movies = [];
        this.loadStatus = "pending";
        this.deleteStatus = "idle";
        this.saveStatus = "idle";
        this.deleteMovieId = null;
        this.editorValue = null;
    }

    public ngOnInit() {
        this.loadStatus = "pending";
        (async () => {
            try {
                this.loadStatus = "done";
                this.movies = await this.movieService.getAll();
            } catch (err) {
                this.loadStatus = "error";
            }
        })();
    }

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

    public edit<T extends MovieInterface, K extends keyof T>(key: K, val: T[K]) {
        // const movie = {...(this.editorValue || {}), ...{[key]: val}};
        // this.editorValue = movie;
    }
}

/*

        const error = this.movieStore.loadStatus === "error" ? new Error("Movies could not be loaded!") : null;
        const movies = this.movieStore.loadStatus === "pending" ? null : this.movieStore.movies;

        <Container>
            <Row>
                <Column width={12}>
                    <ListGroup
                        error={error}
                        items={movies}
                        itemComponent={(movie: MovieInterface) => (
                            <Row>
                                <Column width={8}>
                                    <h5>{movie.title}</h5>
                                    <p>{movie.year}</p>
                                </Column>
                                <Column width={4} style={{ textAlign: "right" }}>
                                    <Button
                                        kind="danger"
                                        onClick={() => {
                                            this.movieStore.focusDeleteDialog(movie.id);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Column>
                            </Row>
                        )}
                    />
                </Column>
            </Row>
            <Modal
                title="Movie Editor"
                isVisible={this.movieStore.editorValue !== null}
                onAcceptLabel="Save"
                onAccept={() => {
                    if (isValidNewMovie(this.movieStore.editorValue)) {
                        const movie: any = this.movieStore.editorValue;
                        this.movieStore.create(movie);
                    }
                }}
                onCancelLabel="Cancel"
                onCancel={() => {
                    this.movieStore.focusOutEditor();
                }}
                error={this.movieStore.saveStatus === "error" ? new Error("Something went wrong") : undefined}
            >

                <form>
                    <TextField
                        id="movie_title"
                        value={this.movieStore.editorValue ? this.movieStore.editorValue.title : ""}
                        title="Title"
                        placeholder="Title"
                        isValid={(val) => val !== undefined && val !== ""}
                        onChange={(val) => {
                            this.movieStore.edit("title", val);
                        }}
                    />
                    <TextField
                        id="movie_year"
                        value={this.movieStore.editorValue ? this.movieStore.editorValue.year : 2018}
                        title="Year"
                        placeholder="Year"
                        isValid={(val) => typeof val === "number"}
                        onChange={(val) => {
                            const n = parseInt(val);
                            if (!isNaN(n)) {
                                this.movieStore.edit("year", n);
                            }
                        }}
                    />
                </form>
            </Modal>
            <Modal
                title="Are you sure?"
                isVisible={this.movieStore.deleteMovieId !== null}
                onAcceptLabel="Delete"
                onAccept={() => {
                    if (this.movieStore.deleteMovieId) {
                        this.movieStore.delete(this.movieStore.deleteMovieId);
                    }
                }}
                onCancelLabel="Cancel"
                onCancel={() => {
                    this.movieStore.focusOutDeleteDialog();
                }}
                error={this.movieStore.deleteStatus === "error" ? new Error("Something went wrong") : undefined}
            >
                The movie will be deleted permanently!
            </Modal>
        </Container>

*/
