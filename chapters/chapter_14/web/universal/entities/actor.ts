import { MovieInterface } from "./movie";

export interface ActorInterface {
    id: number;
    name: string;
    yearBorn: number;
    movies: MovieInterface[];
}
