import { Application } from "express";
import { index_router, user_router } from "../../routes";

export default async (app: Application) => {
    // application routes
    app.use('/', index_router);

    app.use("/users", user_router);
};
