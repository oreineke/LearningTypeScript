import * as React from "react";
import * as ReactDOM from "react-dom";
import { Calculator } from "./calculator_component";
import { MathClient } from "./math_client";

const Root = (
    <div>
        <Calculator math={new MathClient()} />
    </div>
);

ReactDOM.render(
    Root,
    document.querySelector("#main")
);
