import { Component, Input } from "@angular/core";

@Component({
    selector: "",
    template: `
    <div className="progress">
        <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style="width: 50%"
        >
        </div>
    </div>`
})
export class Loading {
}
