import { Request, RequestHandler, Response } from "express";
import createFromBody from "../../services/extra/createFromBody";
import USER_SERVICE from "../user/user.service";

interface CONTROLLER_INTERFACE {
    user_service: USER_SERVICE;
}

export default class AUTH_CONTROLLER implements CONTROLLER_INTERFACE {
    user_service;

    constructor() {
        this.user_service = new USER_SERVICE();
    }

    create_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const body = req.body;

            if (!body) return res.status(404).json({ message: "MISSING DETAILS", data: null });

            const { new_user, status } = createFromBody(body, { _type: "USER", _strict: true }) // strict mode is adviseable for creation of entities

            if (!new_user || status !== 200) return res.status(404).json({ message: "MISSING DETAILS", data: null });

            const user = await this.user_service.create_user(new_user);

            if (!user) return res.status(404).json({ message: "NOT FOUND", data: null });

            res.status(200).send(user);
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED" });
        }
    }

    login: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;
            const update = req.body;

            if (!update || !user_id || !user_id.trim()) return res.status(404).json({ message: "MISSING DETAILS", data: null });

            const updated_user = await this.user_service.update_user(user_id, update);

            if (!updated_user) return res.status(500).json({ message: "AN ERROR OCCURED", data: null });

            res.status(200).send(updated_user);
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED" });
        }
    }

    get_current_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;

            if (!user_id || !user_id.trim()) return res.status(404).json({ message: "MISSING DETAILS", data: null });

            const del_res = await this.user_service.delete_user(user_id);

            res.status(200).send(del_res);
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED" });
        }
    }
}
