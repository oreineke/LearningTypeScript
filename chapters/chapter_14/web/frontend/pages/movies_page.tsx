import * as React from "react";
import { observer } from "mobx-react";
import { MovieInterface } from "../../universal/entities/movie";
import { Container, Row, Column } from "../components/grid_component";
import { ListGroup } from "../components/list_group_component";
import { Modal } from "../components/modal_component";
import { Button } from "../components/button_component";
import { lazyInject } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

interface MoviePageProps {
    movies: MovieInterface[] | null;
    error: Error | null;
}

@observer
export class MoviePage extends React.Component<MoviePageProps> {
    @lazyInject(TYPE.MovieStore) public movieStore!: interfaces.MovieStore;
    public render() {
        return (
            <Container>
                <Row>
                    <Column width={12}>
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
                            error={null/*new Error("Movies could not be loaded!")*/}
                            items={[
                                { title: "Star Wars" },
                                { title: "Star Trek" }
                            ]}
                            itemComponent={(movie: MovieInterface) => (
                                <div>
                                    <h5>{movie.title}</h5>
                                </div>
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
