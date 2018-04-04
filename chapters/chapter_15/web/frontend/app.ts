import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: "<Layout/>",
    styleUrls: [
        "../../node_modules/bootstrap/scss/bootstrap.scss"
    ]
})
class Application {
  name: string = "World";
}
