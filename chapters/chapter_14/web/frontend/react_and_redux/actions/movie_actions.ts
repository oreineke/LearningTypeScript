import * as Redux from "redux";
import { MovieInterface } from "../../../universal/entities/movie";
import { MovieClient } from "../../shared/http_client/movie_client";
import { ACTION_TYPE } from "../constants/action_types";

export function fetchMoviesStart() {
    return {
        error: null,
        playload: null,
        type: ACTION_TYPE.FETCH_MOVIES_SUCCESS
    };
}

export function fetchMoviesError(error: Error) {
    return {
        error,
        playload: null,
        type: ACTION_TYPE.FETCH_MOVIES_SUCCESS
    };
}

export function fetchMoviesSuccess(movies: MovieInterface[]) {
    return {
        error: null,
        playload: movies,
        type: ACTION_TYPE.FETCH_MOVIES_SUCCESS
    };
}

export function fetchMoviesAsync() {
    return function(dispatch: Redux.Dispatch<Redux.Action>) {
        (async () => {
            try {
                dispatch(fetchMoviesStart());
                const movies = await MovieClient.getAllMovies();
                dispatch(fetchMoviesSuccess(movies));
            } catch (e) {
                dispatch(fetchMoviesError(e));
            }
        })();
    };
}
