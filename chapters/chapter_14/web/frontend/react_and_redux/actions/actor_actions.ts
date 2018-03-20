import { ActorClient } from "../../shared/http_client/actor_client";
import { ACTION_TYPE } from "../constants/action_types";
import { ActorInterface } from "../../../universal/entities/actor";
import * as Redux from "redux";

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

export function fetchActorsSuccess(actors: ActorInterface[]) {
    return {
        type: ACTION_TYPE.FETCH_ACTORS_SUCCESS,
        error: null,
        playload: actors
    };
}

export function fetchActorsAsync() {
    return function(dispatch: Redux.) {
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
