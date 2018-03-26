import { ActorInterface } from "../universal/entities/actor";
import { MovieInterface } from "../universal/entities/movie";

export type Status = "pending" | "error" | "done";

export interface ActorStore {
    actors: ActorInterface[];
    status: Status;
    getAllActors(): Promise<void>;
    filterActorsByYearOfBirth(year: number): Promise<void>;
    createActor(actor: ActorInterface): Promise<void>;
}

export interface MovieStore {
    movies: MovieInterface[];
    status: Status;
    getAllMovies(): Promise<void>;
    filterMovies(title?: string, year?: number): Promise<void>;
    filterMoviesByYear(year: number): Promise<void>;
    createMovie(movie: MovieInterface): Promise<void>;
}
