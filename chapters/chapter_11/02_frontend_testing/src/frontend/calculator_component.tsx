import * as React from "react";
import { Input } from "./input_component";
import { MathClient } from "./math_client";

const ids = {
  base: "#base",
  exponent: "#exponent",
  result: "#result",
  submit: "#submit"
};

interface CalculatorProps {}

interface CalculatorState {
  base: number;
  exponent: number;
  result: number;
}

export class Calculator extends React.Component<CalculatorProps, CalculatorState> {

  private _client: MathClient;

  public constructor(props: CalculatorProps) {
    super(props);
    this.state = {
      base: 1,
      exponent: 1,
      result: 1
    };
  }

  public render() {
    return (
      <div className="well">
        <div className="row">
          <div className="col-md-3">
            <Input
              name="base"
              onChangeHandler={(v) => this.setState({ base: v })}
            />
          </div>
          <div className="col-md-3">
            <Input
              name="exponent"
              onChangeHandler={(v) => this.setState({ exponent: v })}
            />
          </div>
          <div className="col-md-3">
            <Input
              name="result"
              onChangeHandler={(v) => this.setState({ result: v })}
            />
          </div>
          <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this._onSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  private _onSubmit() {
    this.setState({
      result: this._client.pow(
        this.state.base,
        this.state.exponent
      )
    });
  }

}
