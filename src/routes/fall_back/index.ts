import express, { Response } from "express";

const router = express.Router();

router.get("/*", (_, res: Response) => { // last route to catch all routes
    res.render("error", { title: "My Node Template", header: "ERROR", status: 404, message: "PAGE NOT FOUND" });
});

export default router;
