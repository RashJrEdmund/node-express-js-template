import { Application } from "express";
import { index_router, auth_router, user_router, fall_back } from "../../routes";

export default async (app: Application) => {
    // application routes
    app.use('/', index_router);

    app.use("/api/v1/auth", auth_router);

    app.use("/api/v1/users", user_router);

    app.use("/*", fall_back);
};
