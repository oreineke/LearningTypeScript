import * as React from "react";
import { MathClient } from "./math_client";
import { NumericInput } from "./numeric_input_component";

const ids = {
  base: "#base",
  exponent: "#exponent",
  result: "#result",
  submit: "#submit"
};

interface CalculatorProps {
  client: MathClient;
}

interface CalculatorState {
  base: number;
  exponent: number;
  result: number;
}

export class Calculator extends React.Component<CalculatorProps, CalculatorState> {

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
          <div className="col">
            <NumericInput
              name="Base"
              readonly={false}
              onChangeHandler={(v) => this.setState({ base: v })}
            />
          </div>
          <div className="col">
            <NumericInput
              name="Exponent"
              readonly={false}
              onChangeHandler={(v) => this.setState({ exponent: v })}
            />
          </div>
          <div className="col">
            <NumericInput
              name="Result"
              readonly={true}
              onChangeHandler={(v) => this.setState({ result: v })}
            />
          </div>
          <div className="col">
            <button
              type="Submit"
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
    (async () => {
      const result = await this.props.client.pow(
        this.state.base,
        this.state.exponent
      );
      this.setState({ result });
    })();
  }

}
