import { Request, RequestHandler, Response } from "express";
import USER_SERVICE from "./user.service"

interface CONTROLLER_INTERFACE {
    user_service: USER_SERVICE;
}

export default class USER_CONTROLLER implements CONTROLLER_INTERFACE {
    user_service;

    constructor() {
        this.user_service = new USER_SERVICE();
    }

    get_all_users: RequestHandler = async (req: Request, res: Response) => {
        try {
            const users = await this.user_service.get_all_users();

            if (!users) return res.status(404).send({ message: "NONE FOUND", data: null });

            return res.status(200).send({ message: "USER RETIREVED", total: users.length, data: users });
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED", data: null });
        }
    }

    get_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;

            if (!user_id || !user_id.trim()) return res.status(404).json({ message: "MISSING DETAILS", data: null });

            const user = await this.user_service.get_user_by_id(user_id);

            if (!user) return res.status(404).json({ message: "NOT FOUND", data: null });

            res.status(200).send({ message: "USER RETRIEVED", data: user });
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED", data: null });
        }
    }

    update_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;
            const update = req.body;

            if (!update || !user_id || !user_id.trim()) return res.status(404).json({ message: "MISSING DETAILS", data: null });

            const updated_user = await this.user_service.update_user(user_id, update);

            if (!updated_user) return res.status(500).json({ message: "AN ERROR OCCURED", data: null });

            res.status(200).send({ message: "USER UPDATED", data: updated_user });
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED", data: null });
        }
    }

    delete_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;

            if (!user_id || !user_id.trim()) return res.status(404).json({ message: "MISSING DETAILS", data: null });

            const del_res = await this.user_service.delete_user(user_id);

            res.status(200).send({ message: "USER DELETED", data: del_res });
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED", data: null });
        }
    }
}
