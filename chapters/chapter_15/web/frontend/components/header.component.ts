import { Component, Input } from "@angular/core";

type BgColor = "primary" | "secondary" | "success" |
               "danger" | "warning" | "info" | "light" |
               "dark" | "white";

@Component({
    selector: "",
    template: `
        <nav className={`navbar navbar-expand-lg navbar-light bg-${props.bg}`}>
        <Link className="navbar-brand" to={props.rootPath}>
            {props.title}
        </Link>
        <ul className="navbar-nav">
            {
                props.links.map((link, linkIndex) => (

                    <a className="navbar-brand" routerLink="link.path" routerLinkActive="active">
                        {link.text}
                    </a>
                ))
            }
        </ul>
    </nav>`
})
class Header {
    @Input() public bg!: BgColor;
    @Input() public title!: string;
    @Input() public rootPath!: string;
    @Input() public links!: { path: string; text: string }[];
}
