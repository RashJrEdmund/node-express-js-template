import express, { Response } from "express";

const router = express.Router();

router.get('/', (_, res: Response) => {
    res.render("landing", { title: "My Node Template" });
});

export default router;
