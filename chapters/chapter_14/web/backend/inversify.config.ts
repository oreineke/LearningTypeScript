import { AsyncContainerModule } from "inversify";
import { Repository, Connection } from "typeorm";
import { Movie } from "./entities/movie";
import { Actor } from "./entities/actor";
import { getDbConnection } from "./db";
import { getMovieRepository } from "./repositories/movie_repository";
import { getActorRepository } from "./repositories/actor_repository";
import { TYPE } from "./constants/types";

export const bindings = new AsyncContainerModule(async (bind) => {

    await getDbConnection();
    await require("./controllers/movie_controller");
    await require("./controllers/actor_controller");

    bind<Repository<Movie>>(TYPE.MovieRepository).toDynamicValue(() => {
        return getMovieRepository();
    }).inRequestScope();

    bind<Repository<Actor>>(TYPE.ActorRepository).toDynamicValue(() => {
        return getActorRepository();
    }).inRequestScope();

});
