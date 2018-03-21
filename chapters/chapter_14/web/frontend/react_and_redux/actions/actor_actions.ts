import * as Redux from "redux";
import { ActorInterface } from "../../../universal/entities/actor";
import { ActorClient } from "../../shared/http_client/actor_client";
import { ACTION_TYPE } from "../constants/action_types";

export function fetchActorsStart() {
    return {
        error: null,
        playload: null,
        type: ACTION_TYPE.FETCH_ACTORS_SUCCESS
    };
}

export function fetchActorsError(error: Error) {
    return {
        error,
        playload: null,
        type: ACTION_TYPE.FETCH_ACTORS_SUCCESS,
    };
}

export function fetchActorsSuccess(actors: ActorInterface[]) {
    return {
        error: null,
        playload: actors,
        type: ACTION_TYPE.FETCH_ACTORS_SUCCESS,
    };
}

export function fetchActorsAsync() {
    return function(dispatch: Redux.Dispatch<Redux.Action>) {
        (async () => {
            try {
                dispatch(fetchActorsStart());
                const actors = await ActorClient.getAllActors();
                dispatch(fetchActorsSuccess(actors));
            } catch (e) {
                dispatch(fetchActorsError(e));
            }
        })();
    };
}
