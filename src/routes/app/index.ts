import express, { Response } from "express";
import { MY_GITHUB_URL, MY_TWITTER_URL } from "../../services/constants";

const router = express.Router();

router.get('/', (_, res: Response) => {
    res.render("landing", { title: "My Node Template", MY_GITHUB_URL, MY_TWITTER_URL });
});

export default router;
