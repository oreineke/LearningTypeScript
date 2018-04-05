import { Component, Input } from "@angular/core";

@Component({
    selector: "",
    template: `
    <ul className="list-group">
        if (this.props.error) {
            return <ErrorMsg msg={this.props.error.message} />;
        } else if (!this.props.items) {
            return <Loading />;
        } else {
            return this.props.items.map(
                (item, itemIndex) => (
                    <li className="list-group-item" key={itemIndex}>
                        {this.props.itemComponent(item)}
                    </li>
                )
            );
        }
    </ul>
    `
})
export class ListGroup {
    error: Error | null;
    items: any[] | null;
    itemComponent(item: any): JSX.Element;
}
