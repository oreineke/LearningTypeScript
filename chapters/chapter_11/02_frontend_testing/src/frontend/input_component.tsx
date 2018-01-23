import * as React from "react";

interface NumericInputProps {
    name: string;
    onChangeHandler(val: number): void;
}

interface NumericInputState {
    isValid: boolean;
}

export class Input extends React.Component<NumericInputProps, NumericInputState> {

    public constructor(props: NumericInputProps) {
        super(props);
        this.state = {
            isValid: true
        };
    }

    public render() {
        return (
            <div className="form-group">
                <label>{this.props.name}</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val)) {
                            this.setState({ isValid: true });
                            this.props.onChangeHandler(val);
                        } else {
                            this.setState({ isValid: false });
                        }
                    }}
                />
            </div>
        );
    }
}
