import { getConnection } from "typeorm";
import { Actor } from "../entities/actor";

export function getRepository() {
    const conn = getConnection();
    const movieRepository = conn.getRepository(Actor);
    return movieRepository;
}
