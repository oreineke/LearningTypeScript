import { ActorInterface } from "../universal/entities/actor";
import { MovieInterface } from "../universal/entities/movie";

export type Status = "idle" | "pending" | "error" | "done";

export interface ActorService {
    getAll(): Promise<ActorInterface[]>;
    create(actor: ActorInterface): Promise<void>;
    delete(id: number): Promise<void>;
}

export interface MovieService {
    getAll(): Promise<void>;
    create(movie: MovieInterface): Promise<void>;
    delete(id: number): Promise<void>;
}
