import { ActorPageState } from "../pages/actors_page";
import { ACTION_TYPE } from "../constants/action_types";

type ACTION_TYPES = keyof typeof ACTION_TYPE;

export function actorReducer(action: { type: ACTION_TYPES, playload: any }, previousState: ActorPageState) {
    switch (action.type) {
        case ACTION_TYPE.FETCH_ACTORS_START:
            return { /* TODO */ };
            case ACTION_TYPE.FETCH_ACTORS_SUCCESS:
            return { /* TODO */ };
        case ACTION_TYPE.FETCH_ACTORS_ERROR:
            return { /* TODO */ };
        default:
            return previousState;
    }
}
