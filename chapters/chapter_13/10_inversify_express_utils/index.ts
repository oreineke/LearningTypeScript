import "reflect-metadata";
import express from "express";

(async () => {

    // await getDbConnection();

    const port = 3000;
    const app = express();

    // app.use("/api/v1/movies", movieRouter);
    
    app.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`)
    });

})();
