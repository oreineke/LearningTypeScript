import { Movie } from "../../shared/entities/movie";

export default class MovieClient {
    static async getAllMovies(): Promise<Movie[]> {
        const response = await fetch("/api/v1/movies/", { method: "GET" });
        const json = await response.json();
        return json as Movie[];
    }

    static async filterMoviesByYear(year: number): Promise<Movie[]> {
        const response = await fetch(`/api/v1/movies/${year}`, { method: "GET" });
        const json = await response.json();
        return json as Movie[];
    }

    static async createMovie(movie: Movie) {
        const requestBody = JSON.stringify(movie);
        const response = await fetch("/api/v1/movies/", { method: "POST", body: requestBody });
        const json = await response.json();
        return json as Movie;
    }
}
