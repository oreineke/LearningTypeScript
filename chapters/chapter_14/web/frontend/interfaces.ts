import { ActorInterface } from "../universal/entities/actor";
import { MovieInterface } from "../universal/entities/movie";

export interface ActorStore {
    actors: ActorInterface[];
    status: "pending" | "error" | "done";
    getAllActors(): Promise<void>;
    filterActorsByYearOfBirth(year: number): Promise<void>;
    createActor(actor: ActorInterface): Promise<void>;
}

export interface MovieStore {
    actors: MovieInterface[];
    status: "pending" | "error" | "done";
    getAllMovies(): Promise<void>;
    filterMoviesB(title?: string, year?: number): Promise<void>;
    filterMoviesByYear(year: number): Promise<void>;
    createMovie(movie: MovieInterface): Promise<void>;
}
