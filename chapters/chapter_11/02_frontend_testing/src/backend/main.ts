import * as express from "express";
import * as path from "path";
import { MathDemo } from "./math_demo";

const app = express();

// Route for static assests (css and js file)
// the path is ../../../ because it is executed
// from the /dist/backend folder
app.use("/public", express.static(path.join(__dirname, "../../../public")));

// Route for index.html the path
// is ../../../ because it is executed
// from the /dist/backend folder
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../../../index.html")));

// Route for math pow operation
app.get("/api/math/pow/:base/:exponent", (req, res) => {
    const mathDemo = new MathDemo();
    const base = parseInt(req.params.base, 10);
    const exponent = parseInt(req.params.exponent, 10);
    const result = mathDemo.pow(base, exponent);
    res.json({ result });
});

console.log("App listening at http://localhost:3000"); // tslint:disable-line
app.listen(3000);
