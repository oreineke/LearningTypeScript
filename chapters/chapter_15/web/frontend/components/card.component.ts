/*
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-card-img",
    template: `
        <img className="card-img-top" src={imgPath} alt={imgAlt} />
    `
})
export class CardImage {
    @Input() public imgPath!: string;
    @Input() public imgAlt!: string;
}

@Component({
    selector: "app-card",
    template: `
        <div className="card">
            <div *ngIf="img">
                <app-card-img [imgPath]={img.imgPath} [imgAlt]={img.imgAlt} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.description}
                </p>
                <Link className="btn btn-primary" to={props.linkPath} >
                    {props.linkText}
                </Link>
            </div>
        </div>`
})
export class Card {
    @Input() public title!: string;
    @Input() public description!: string;
    @Input() public linkPath!: string;
    @Input() public linkText!: string;
    @Input() public img!: {
        imgPath: string;
        imgAlt: string;
    } | null;
}
*/
