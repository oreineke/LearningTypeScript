import { Actor } from "../../universal/entities/actor";

export interface ActorPageState {
    actors: Actor[] | null;
    error: Error | null;
}

export class ActorPage {

}
