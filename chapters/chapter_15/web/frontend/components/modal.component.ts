/*
import { Component, Input } from "@angular/core";

@Component({
    selector: "",
    template: `
    <div
        className="modal fade show"
        role="dialog"
        style="display: block"
    >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">
                        {this.props.title}
                    </h5>
                    <Button
                        className="close"
                        onClick={() => {
                            this.props.onCancel();
                        }}
                    >
                        <span aria-hidden="true">&times;</span>
                    </Button>
                </div>
                <div className="modal-body">
                    {
                        (() => {
                            if (this.props.error) {
                                return <ErrorMsg msg={this.props.error.message} />;
                            }
                        })()
                    }
                    {this.props.children}
                </div>
                <div className="modal-footer">
                    <Button
                        onClick={() => {
                            this.props.onAccept();
                        }}
                    >
                        {this.props.onAcceptLabel}
                    </Button>
                    <Button
                        kind="secondary"
                        onClick={() => {
                            this.props.onCancel();
                        }}
                    >
                        {this.props.onCancelLabel}
                    </Button>
                </div>
            </div>
        </div>
    </div>
    `
})
export class Modal {
    @Input() public title!: string;
    @Input() public isVisible!: boolean;
    @Input() public onAcceptLabel!: string;
    @Input() public onCancelLabel!: string;
    @Input() public error?: Error;
    @Input() public onCancel!: () => void;
    @Input() public onAccept!: () => void;
}
*/
