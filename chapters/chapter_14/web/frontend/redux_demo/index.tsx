import * as React from "react";
import * as ReacDOM from "react-dom";
import "../../../node_modules/bootstrap/scss/bootstrap.scss";
import { ErrorMsg } from "../shared/components/error_msg_component";

const selector = "#root";
const $element = document.querySelector(selector);

if (!$element) {
    throw new Error(`Node ${selector} not found!`);
} else {
    ReacDOM.render(
        <ErrorMsg msg="TODO" />,
        $element
    );
}
