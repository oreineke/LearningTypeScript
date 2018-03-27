# How can I run this example?

## Unix

Set the following environment variables:

```sh
export DATABASE_USER=postgres  \
export DATABASE_PASSWORD=secret  \
export DATABASE_HOST=localhost  \
export DATABASE_PORT=5432  \
export DATABASE_DB=demo
```

Download the Docker Postgres image:

```
docker pull postgres:9.5
```

Run a Docker container:

```sh
docker run --name POSTGRES_USER -p "$DATABASE_PORT":"$DATABASE_PORT"  \
-e POSTGRES_PASSWORD="$DATABASE_PASSWORD"  \
-e POSTGRES_USER="$DATABASE_USER"  \
-e POSTGRES_DB="$DATABASE_DB" \
-d postgres:9.5
```

## Windows

Set the following environment variables. These commands have been tested in the windows powershell.

```sh
$env:DATABASE_USER='postgres';
$env:DATABASE_PASSWORD='secret';
$env:DATABASE_HOST='localhost';
$env:DATABASE_PORT=5432;
$env:DATABASE_DB='demo';
```

Download the Docker Postgres image:

```
docker pull postgres:9.5
```


Run a Docker container:

```sh
docker run --name POSTGRES_USER -p 5432:5432 -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=postgres -e POSTGRES_DB=demo -d postgres:9.5
```

# Build and Run

```sh
npm run build
npm run start
```