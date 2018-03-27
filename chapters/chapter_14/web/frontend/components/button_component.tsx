import * as React from "react";

type Kind = "primary" | "secondary" | "success" |
            "danger" | "warning" | "info" | "light" |
            "dark" | "link";

interface ButtonProps {
    kind?: Kind;
    onClick(): void;
    className?: string;
}

export class Button extends React.Component<ButtonProps> {
    public render() {
        return (
            <button
                type="button"
                className={this._getClass()}
                onClick={() => this.props.onClick()}
            >
                {this.props.children}
            </button>
        );
    }
    private _getClass() {
        if (this.props.className !== undefined) {
            // If a class is specified we use it
            return this.props.className;
        } else {
            // If no class is specified we use the default "btn" with kind "primary"
            // If a kind is specified we use it
            const kind = this.props.kind ? this.props.kind : "primary";
            return `btn btn-${kind}`;
        }
    }
}

export class ButtonToolbar extends React.Component {
    public render() {
        return (
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                {this.props.children}
            </div>
        );
    }
}

export class ButtonGroup extends React.Component {
    public render() {
        return (
            <div className="btn-group mr-2" role="group" aria-label="First group">
                {this.props.children}
            </div>
        );
    }
}
