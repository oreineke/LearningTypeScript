import * as React from "react";
import { ActorInterface } from "../../../universal/entities/actor";

export interface ActorPageState {
    actors: ActorInterface[] | null;
    error: Error | null;
}

class ActorPage extends React.Component<{}, ActorPageState> {
    public render() {
        return <div>todo</div>;
    }
}

export { ActorPage };
