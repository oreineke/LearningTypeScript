import * as React from "react";
import { observer } from "mobx-react";
import { MovieInterface } from "../../universal/entities/movie";
import { Container, Row, Column } from "../components/grid_component";
import { ListGroup } from "../components/list_group_component";
import { Modal } from "../components/modal_component";
import { Button, ButtonToolbar, ButtonGroup } from "../components/button_component";
import { lazyInject } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

@observer
export class MoviePage extends React.Component {
    @lazyInject(TYPE.MovieStore) public movieStore!: interfaces.MovieStore;
    public componentWillMount() {
        this.movieStore.getAllMovies();
    }
    public render() {
        const error = this.movieStore.status === "error" ? new Error("Movies could not be loaded!") : null;
        const movies = this.movieStore.status === "pending" ? null : this.movieStore.movies;
        return (
            <Container>
                <Row>
                    <Column width={12} style={{ textAlign: "right", marginBottom: "10px" }}>
                        <Button
                            onClick={() => {
                                //
                            }}
                        >
                            Add Movie
                        </Button>
                    </Column>
                </Row>
                <Row>
                    <Column width={12}>
                        <ListGroup
                            error={error}
                            items={movies}
                            itemComponent={(movie: MovieInterface) => (
                                <Row>
                                    <Column width={8}>
                                        <h5>{movie.title}</h5>
                                    </Column>
                                    <Column width={4}>
                                        <ButtonToolbar>
                                            <ButtonGroup>
                                                <Button
                                                    onClick={() => {
                                                        //
                                                    }}
                                                >
                                                    View
                                                </Button>
                                            </ButtonGroup>
                                            <ButtonGroup>
                                                <Button
                                                    kind="danger"
                                                    onClick={() => {
                                                        //
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </ButtonGroup>
                                        </ButtonToolbar>
                                    </Column>
                                </Row>
                            )}
                        />
                    </Column>
                </Row>
                <Modal
                    title="Create a new Movie"
                    isVisible={false}
                    onAcceptLabel="Save"
                    onAccept={() => {
                        //
                    }}
                    onCancelLabel="Cancel"
                    onCancel={() => {
                        //
                    }}
                >
                    //
                </Modal>
            </Container>
        );
    }
}
