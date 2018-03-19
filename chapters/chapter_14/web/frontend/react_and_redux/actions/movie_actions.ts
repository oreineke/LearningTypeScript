import { MovieClient } from "../http_client/movie_client";
import { ACTION_TYPE } from "../constants/action_types";
import { Movie } from "../../universal/entities/movie";

export async function fetchMoviesStart() {
    return {
        type: ACTION_TYPE.FETCH_MOVIES_SUCCESS,
        error: null,
        playload: null
    };
}

export function fetchMoviesError(error: Error) {
    return {
        type: ACTION_TYPE.FETCH_MOVIES_SUCCESS,
        error: error,
        playload: null
    };
}

export function fetchMoviesSuccess(movies: Movie[]) {
    return {
        type: ACTION_TYPE.FETCH_MOVIES_SUCCESS,
        error: null,
        playload: movies
    };
}

export function fetchMoviesAsync() {
    return function(dispatch) {
        (async () => {
            try {
                dispatch(fetchMoviesStart());
                const movies = await MovieClient.getAllMovies();
                dispatch(fetchMoviesSuccess(movies));
            } catch(e) {
                dispatch(fetchMoviesError(e));
            }
        })();
    }
}
