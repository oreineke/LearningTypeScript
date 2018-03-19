import * as React from "react";

interface ErrorMsgProps {
    msg: string;
}

export class ErrorMsg extends React.Component<ErrorMsgProps> {
    public render() {
        return (
            <div className="error-msg">
                {this.props.msg}
            </div>
        );
    }
}
