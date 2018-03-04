/*

export DATABASE_USER=postgres \
export DATABASE_PASSWORD=secret \
export DATABASE_HOST=localhost \
export DATABASE_PORT=5432 \
export DATABASE_DB=demo

docker pull postgres:9.5
docker stop $containerId
docker rm $containerId

containerId=$(docker ps -a -q --filter ancestor=postgres)
docker run --name POSTGRES_USER -p "$DATABASE_PORT":"$DATABASE_PORT"  \
-e POSTGRES_PASSWORD="$DATABASE_PASSWORD"  \
-e POSTGRES_USER="$DATABASE_USER"  \
-e POSTGRES_DB="$DATABASE_DB" \
-d postgres

*/

import {
    Entity,
    getConnection,
    createConnection,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

(async () => {

    @Entity()
    class Movie {
        @PrimaryGeneratedColumn()
        public id!: number;
        @Column()
        public title!: string;
        @Column()
        public year!: number;
    }

    const entities = [
        Movie
    ];
    
    const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
    const DATABASE_USER = process.env.DATABASE_USER || "";
    const DATABASE_PORT = 5432;
    const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
    const DATABASE_DB = "demo";
    
    const conn = await createConnection({
        type: "postgres",
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        username: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_DB,
        entities: entities,
        synchronize: true
    });
    
    const getRepository = (entity: Function) => conn.getRepository(entity);
    const movieRepository = conn.getRepository(Movie);

    movieRepository.create({
        title: "Star Wars: Episode IV – A New Hope",
        year: 1977
    });

})();