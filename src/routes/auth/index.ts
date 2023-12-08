import express from "express";
import { AUTH_CONTROLLER } from "../../modules";

const router = express.Router();

const auth_controller = new AUTH_CONTROLLER();

router.post('/creat-account', auth_controller.create_one_user.bind(auth_controller));

router.post('/login', auth_controller.login.bind(auth_controller));

router.get('/current-user', auth_controller.get_current_user.bind(auth_controller));

export default router;
