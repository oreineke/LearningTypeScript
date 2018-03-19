import { ActorInterface } from "./actor";

export interface MovieInterface {
    id: number;
    title: string;
    year: number;
    actors: ActorInterface[];
}
