import * as React from "react";
import { MovieInterface } from "../../../universal/entities/movie";

export interface MoviePageState {
    movies: MovieInterface[] | null;
    error: Error | null;
}

class MoviePage extends React.Component<{}, MoviePageState> {
    public render() {
        return <div>todo</div>;
    }
}

export { MoviePage };
