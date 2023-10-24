import express, { Response } from "express";
import { render_defaults } from "../../defaults";

const router = express.Router();

router.get("/*", (_, res: Response) => { // last route to catch all routes
    const current_route = "/error";
    res.render("error", { ...render_defaults, current_route, header: "ERROR", status: 404, message: "PAGE NOT FOUND" });
});

export default router;
