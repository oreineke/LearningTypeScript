import { getApp } from "./server";

const app = getApp();

console.log("App listening at http://localhost:3000"); // tslint:disable-line
app.listen(3000);
