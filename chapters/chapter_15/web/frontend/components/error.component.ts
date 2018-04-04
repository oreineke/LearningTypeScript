import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-error-msg",
    template: `
    <div className="alert alert-danger" role="alert">
        {msg}
    </div>`
})
export class ErrorMsg {
    @Input() public msg!: string;
}
