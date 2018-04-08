import { Component } from "@angular/core";

@Component({
    selector: "app-loading",
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
export class LoadingComponent {
}
