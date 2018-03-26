import * as React from "react";
import { observer } from "mobx-react";
import { ActorInterface } from "../../universal/entities/actor";
import { Container, Row, Column } from "../components/grid_component";
import { ListGroup } from "../components/list_group_component";
import { Modal } from "../components/modal_component";
import { Button, ButtonGroup, ButtonToolbar } from "../components/button_component";
import { lazyInject } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

@observer
export class ActorPage extends React.Component {
    @lazyInject(TYPE.ActorStore) public actorStore!: interfaces.ActorStore;
    public componentWillMount() {
        this.actorStore.getAllActors();
    }
    public render() {
        const error = this.actorStore.status === "error" ? new Error("Actors could not be loaded!") : null;
        const actors = this.actorStore.status === "pending" ? null : this.actorStore.actors;
        return (
            <Container>
                <Row>
                    <Column width={12} style={{ textAlign: "right", marginBottom: "10px" }}>
                        <Button
                            onClick={() => {
                                //
                            }}
                        >
                            Delete
                        </Button>
                    </Column>
                </Row>
                <Row>
                    <Column width={12}>
                        <ListGroup
                            error={error}
                            items={actors}
                            itemComponent={(actor: ActorInterface) => (
                                <Row>
                                    <Column width={8}>
                                        <h5>{actor.name}</h5>
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
