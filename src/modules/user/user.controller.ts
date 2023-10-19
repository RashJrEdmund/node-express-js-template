import { Request, RequestHandler, Response } from "express";
import USER_SERVICE from "./user.service"
import REQ_NOT_FOUND_ERROS from "../../services/REQ_ERROR";
import createFromBody from "../../services/extra/createFromBody";

interface CONTROLLER_INTERFACE {
    user_service: USER_SERVICE;
    req_errors: REQ_NOT_FOUND_ERROS;
}

export default class USER_CONTROLLER implements CONTROLLER_INTERFACE {
    user_service;
    req_errors;

    constructor() {
        this.user_service = new USER_SERVICE();
        this.req_errors = new REQ_NOT_FOUND_ERROS("USER");
    }

    get_all_users: RequestHandler = async (req: Request, res: Response) => {
        try {
            const users = await this.user_service.get_all_users();

            if (!users || users.length <= 0) return res.status(404).send({ message: this.req_errors.NONE_FOUND(), data: null });

            return res.status(200).send(users);
        } catch (error) {
            res.status(500).send({ message: this.req_errors.AN_ERROR_OCCURED() });
        }
    }

    get_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;

            if (!user_id || !user_id.trim()) return res.status(404).json({ message: this.req_errors.MISSING_DETAILS(), data: null });

            const user = await this.user_service.get_user_by_id(user_id);

            if (!user) return res.status(404).json({ message: this.req_errors.NOT_FOUND(), data: null });

            res.status(200).send(user);
        } catch (error) {
            res.status(500).send({ message: this.req_errors.AN_ERROR_OCCURED() });
        }
    }

    create_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const body = req.body;

            if (!body) return res.status(404).json({ message: this.req_errors.MISSING_DETAILS(), data: null });

            const { new_user, status } = createFromBody(body, { _type: "USER", _strict: true }) // strict mode is adviseable for creation of entities

            if (!new_user || status !== 200) return res.status(404).json({ message: this.req_errors.MISSING_DETAILS(), data: null });

            const user = await this.user_service.create_user(new_user);

            if (!user) return res.status(404).json({ message: this.req_errors.NOT_FOUND(), data: null });

            res.status(200).send(user);
        } catch (error) {
            res.status(500).send({ message: this.req_errors.AN_ERROR_OCCURED() });
        }
    }

    update_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;
            const update = req.body;

            if (!update || !user_id || !user_id.trim()) return res.status(404).json({ message: this.req_errors.MISSING_DETAILS(), data: null });

            const updated_user = await this.user_service.update_user(user_id, update);

            if (!updated_user) return res.status(500).json({ message: this.req_errors.AN_ERROR_OCCURED(), data: null });

            res.status(200).send(updated_user);
        } catch (error) {
            res.status(500).send({ message: this.req_errors.AN_ERROR_OCCURED() });
        }
    }

    delete_one_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const { user_id } = req.params;

            if (!user_id || !user_id.trim()) return res.status(404).json({ message: this.req_errors.MISSING_DETAILS(), data: null });

            const del_res = await this.user_service.delete_user(user_id);

            res.status(200).send(del_res);
        } catch (error) {
            res.status(500).send({ message: this.req_errors.AN_ERROR_OCCURED() });
        }
    }
}
