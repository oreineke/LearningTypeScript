import "reflect-metadata";
import * as express from "express";
import { Container } from "inversify";
import * as path from "path";
import { InversifyExpressServer } from "inversify-express-utils";
import { bindings } from "./inversify.config";

(async () => {

    try {

        const port = 3000;
        const container = new Container();
        await container.loadAsync(bindings);
        const app = new InversifyExpressServer(container);

        // Declare routes of static files
        app.setConfig((a) => {
            const reactAppPath = path.join(__dirname, "../../public/react_demo");
            const reduxAppPath = path.join(__dirname, "../../public/redux_demo");
            a.use("/react_demo", express.static(reactAppPath));
            a.use("/redux_demo", express.static(reduxAppPath));
        });

        const server = app.build();

        server.listen(port, () => {
            console.log(`Server running at http://127.0.0.1:${port}/`); // tslint:disable-line
        });

    } catch (e) {
        console.log(e); // tslint:disable-line
    }

})();
