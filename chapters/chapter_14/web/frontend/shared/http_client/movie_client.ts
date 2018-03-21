import { MovieInterface } from "../../../universal/entities/movie";

export class MovieClient {

    public static async getAllMovies(): Promise<MovieInterface[]> {
        const response = await fetch("/api/v1/movies/", { method: "GET" });
        const json = await response.json();
        return json as MovieInterface[];
    }

    public static async filterMoviesB(title?: string, year?: number): Promise<MovieInterface[]> {

        const baseUrl = "/api/v1/movies";
        const args = [];

        if (year) {
            args.push(`?year=${year}`);
        }

        if (title) {
            if (args.length > 0) {
                args.push(`?title=${title}`);
            } else {
                args.push(`&title=${title}`);
            }
        }

        const url = `${baseUrl}${args.join("")}`;
        const response = await fetch(url, { method: "GET" });
        const json = await response.json();
        return json as MovieInterface[];

    }

    public static async filterMoviesByYear(year: number): Promise<MovieInterface[]> {
        const response = await fetch(`/api/v1/movies?year=${year}`, { method: "GET" });
        const json = await response.json();
        return json as MovieInterface[];
    }

    public static async createMovie(movie: MovieInterface): Promise<MovieInterface> {
        const requestBody = JSON.stringify(movie);
        const response = await fetch("/api/v1/movies/", { method: "POST", body: requestBody });
        const json = await response.json();
        return json as MovieInterface;
    }

}
