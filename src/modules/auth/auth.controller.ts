import { Request, RequestHandler, Response } from "express";
import createFromBody from "../../services/extra/createFromBody";
import USER_SERVICE from "../user/user.service";
import { BCRYPT_SERVICE, JWT_SERVICE } from "../../services/validation";

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

            new_user.password = await BCRYPT_SERVICE.hash(new_user.password);

            const user = await this.user_service.create_user(new_user);

            if (!user) return res.status(404).json({ message: "NOT FOUND", data: null });

            const token = JWT_SERVICE.sign(user);

            return res.status(200).json({
                message: "ACCOUNT CREATED, VERIFICATION EMAIL SENT",
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED", data: null });
        }
    }

    login: RequestHandler = async (req: Request, res: Response) => {
        try {
            const email = req.body.email;
            const password = req.body.password;

            if (!email || !password) {
                return res.status(401).json({ message: "MISSING DETAILS", data: null });
            }

            const user = await this.user_service.get_user_by_email(email);

            if (!user) {
                return res.status(404).json({ message: "USER NOT FOUND", data: null});
            }

            if (!await BCRYPT_SERVICE.compare(password, user.password)) {
                return res.status(401).json({ message: "WRONG EMAIL OR PASSWORD", data: null });
            }

            const token = JWT_SERVICE.sign(user);

            return res.status(200).json({
                message: "USER LOGGED IN",
                data: {
                    user,
                    token
                }
            });
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED", data: null });
        }
    }

    get_current_user: RequestHandler = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization?.split(" ").pop();

            if (!token) {
                return res.status(401).json({ message: "MISSING TOKEN", data: null });
            }

            const bearer = JWT_SERVICE.verify(token);

            if(!bearer) {
                return res.status(401).json({ message: "TOKEN EXPIRED", data: null });
            }
            
            return res.status(200).json({ message: "USER RETRIEVED", data: null });
        } catch (error) {
            res.status(500).send({ message: "AN ERROR OCCURED", data: null });
        }
    }
}
