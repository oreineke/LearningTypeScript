/*
import { Component, Input, Output, EventEmitter } from "@angular/core";

type Kind = "primary" | "secondary" | "success" |
            "danger" | "warning" | "info" | "light" |
            "dark" | "link";

@Component({
    selector: "app-button",
    template: `
        <button
            type="button"
            class={{btnClass}}
            (click)="click()"
        >
            <ng-content></ng-content>
        </button>`
})
export class Button {

    @Input() public kind?: Kind;
    @Input() public className?: string;
    @Output() public onClicked = new EventEmitter();

    public get btnClass(): string {
        if (this.className !== undefined) {
            return this.className;
        } else {
            const kind = this.kind ? this.kind : "primary";
            return `btn btn-${kind}`;
        }
    }

    public click() {
        this.onClicked.emit();
    }

}
*/
