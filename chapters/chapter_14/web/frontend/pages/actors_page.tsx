import * as React from "react";
import { observer } from "mobx-react";
import { ActorInterface } from "../../universal/entities/actor";
import { Container, Row, Column } from "../components/grid_component";
import { ListGroup } from "../components/list_group_component";
import { Modal } from "../components/modal_component";
import { Button } from "../components/button_component";
import { lazyInject } from "../config/ioc";
import { TYPE } from "../contants/types";
import * as interfaces from "../interfaces";

interface ActorPageProps {
    actors: ActorInterface[] | null;
    error: Error | null;
}

@observer
export class ActorPage extends React.Component<ActorPageProps> {
    @lazyInject(TYPE.ActorStore) public actorStore!: interfaces.ActorStore;
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
                            itemComponent={(actor: ActorInterface) => (
                                <div>
                                    <h5>{actor.name}</h5>
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
