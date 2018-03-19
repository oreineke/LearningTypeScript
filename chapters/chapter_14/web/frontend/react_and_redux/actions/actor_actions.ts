import { ActorClient } from "../http_client/actor_client";
import { ACTION_TYPE } from "../constants/action_types";
import { Actor } from "../../universal/entities/actor";

export async function fetchActorsStart() {
    return {
        type: ACTION_TYPE.FETCH_ACTORS_SUCCESS,
        error: null,
        playload: null
    };
}

export function fetchActorsError(error: Error) {
    return {
        type: ACTION_TYPE.FETCH_ACTORS_SUCCESS,
        error: error,
        playload: null
    };
}

export function fetchActorsSuccess(actors: Actor[]) {
    return {
        type: ACTION_TYPE.FETCH_ACTORS_SUCCESS,
        error: null,
        playload: actors
    };
}

export function fetchActorsAsync() {
    return function(dispatch) {
        (async () => {
            try {
                dispatch(fetchActorsStart());
                const actors = await ActorClient.getAllActors();
                dispatch(fetchActorsSuccess(actors));
            } catch(e) {
                dispatch(fetchActorsError(e));
            }
        })();
    }
}
