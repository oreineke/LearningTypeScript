import { Component, Input } from "@angular/core";

@Component({
    selector: "",
    template: `
        <div class="container">
            {this.props.children}
        </div>
    `
})
export class Container {}

@Component({
    selector: "",
    template: `
        <div class="row">
            {this.props.children}
        </div>
    `
})
export class Row {}

// In the bootstrap grid system the max size is 12
type ColumnWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DeviceSize = "s" | "m" | "l" | "xl";

@Component({
    selector: "",
    template: `
    <div [class]={class} [style]={style}>
        {this.props.children}
    </div>
    `
})
export class Column {
    @Input() public width!: ColumnWidth;
    @Input() public size?: DeviceSize;
    @Input() public style? = "";
    public get class() {
        if (this.size !== undefined) {
            return `col-${this.size}-${this.width}`;
        } else {
            return `col-${this.width}`;
        }
    }
}
