import "../../node_modules/bootstrap/scss/bootstrap.scss";
import * as React from "react";
import * as ReacDOM from "react-dom";
import { ErrorMsg } from "../shared/components/error_msg_component";

ReacDOM.render(
     <ErrorMsg msg="TODO" />,
    document.querySelector("#root")
);
