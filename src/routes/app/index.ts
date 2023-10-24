import express, { Response } from "express";
import { render_defaults } from "../../defaults";

const router = express.Router();

const nav_content = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Error page",
        path: "/next"
    }
]

router.get('/', (_, res: Response) => {
    const current_route = "/" // helps to add css to identify the current_route. the variable must be name current_route. or change logic in navbar.ejs

    res.render("landing", { ...render_defaults, current_route }); // you can overide render_defaults if you intend to keep using this file
});

export default router;
