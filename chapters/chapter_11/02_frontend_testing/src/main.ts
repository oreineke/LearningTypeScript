import { CalculatorComponent } from "./calculator_component";
import { render } from "./component_renderer";
import { MathDemo } from "./math_demo";

const $root = document.querySelector("#main");

if ($root) {
    render(
        CalculatorComponent,
        {
            math: new MathDemo()
        },
        $root
    );
}
