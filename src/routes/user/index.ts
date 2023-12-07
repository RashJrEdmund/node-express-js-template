import express from "express";
import { USER_CONTROLLER } from "../../modules";

const router = express.Router();

const user_controller = new USER_CONTROLLER();

router.get('/all', user_controller.get_all_users.bind(user_controller));

router.get('/:user_id', user_controller.get_one_user.bind(user_controller));

router.put('/update/:user_id', user_controller.update_one_user.bind(user_controller));

router.delete('/delete/:user_id', user_controller.delete_one_user.bind(user_controller));

export default router;
