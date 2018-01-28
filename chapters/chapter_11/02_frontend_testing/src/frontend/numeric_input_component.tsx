import * as React from "react";

interface NumericInputProps {
    name: string;
    readonly: boolean;
    onChangeHandler(val: number): void;
}

interface NumericInputState {
    isValid: boolean;
}

export class NumericInput extends React.Component<NumericInputProps, NumericInputState> {

    public constructor(props: NumericInputProps) {
        super(props);
        this.state = {
            isValid: true
        };
    }

    public render() {
        return (
            <div className="form-group">
                {this._renderError()}
                <label>{this.props.name}</label>
                <input
                    type="text"
                    className="form-control"
                    readOnly={this.props.readonly}
                    onChange={(e) => {
                        const val = e.target.value as any;
                        if (!isNaN(val)) {
                            this.setState({ isValid: true });
                            this.props.onChangeHandler(parseFloat(val));
                        } else {
                            this.setState({ isValid: false });
                        }
                    }}
                />
            </div>
        );
    }

    private _renderError() {
        if (!this.state.isValid) {
            return (
                <div className="error-msg">
                    <p>{`${this.props.name} must be numeric!`}</p>
                </div>
            );
        }
    }

}
