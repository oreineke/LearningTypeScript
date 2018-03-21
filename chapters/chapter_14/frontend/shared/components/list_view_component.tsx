import * as React from "react";
import { ErrorMsg } from "./error_msg_component";

interface ListViewProps {
    error: Error | null;
    items: any[] | null;
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
        if (this.props.items) {
            return this.props.items.map((item) => {
                return this.props.children; // TODO pass item
            });
        }
    }
    private _renderError() {
        if (this.props.error) {
            return <ErrorMsg msg={this.props.error.message} />
        }
    }

}
