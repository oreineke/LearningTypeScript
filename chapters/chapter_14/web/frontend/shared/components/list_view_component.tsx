import * as React from "react";
import { ErrorMsg } from "./error_msg_component";
import { Loading } from "./loading_component";

interface ListViewProps {
    error: Error | null;
    items: any[] | null;
    itemComponent(item: any): JSX.Element;
}

export class ListView extends React.Component<ListViewProps> {
    public render() {
        if (!this.props.children) {
            throw new Error();
        }
        return (
            <div className="list-view">
                {this._renderItems()}
            </div>
        );
    }
    private _renderItems() {
        if (this.props.error) {
            return <ErrorMsg msg={this.props.error.message} />;
        } else if (!this.props.items) {
            return <Loading />;
        } else {
            return this.props.items.map(
                (item) => this.props.itemComponent(item)
            );
        }
    }

}
