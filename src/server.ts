import express, { Application } from "express";
// import { PORT } from "./services/constants";
import App from "./services/express/express.app";
import { config } from "./config";

(async () => {
    const app: Application = express();

    const { app: {
        port: PORT
    } } = config;

    const server_message = `listening on \nhttp://localhost:${PORT}/ \n\n`;

    App(app)
        .then(() => app.listen(PORT, () => console.log(server_message)))
        .catch(console.log);
})();
