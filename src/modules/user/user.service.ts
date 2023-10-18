import { createObjectId } from "../../services/utils";
import USER_REPO from "./user.repo";

interface SERVICE_INTERFACE {
    user_repo: USER_REPO;
}

export default class USER_SERVICE implements SERVICE_INTERFACE {
    user_repo;

    constructor() {
        this.user_repo = new USER_REPO();
    }

    get_all_users = () => {
        return this.user_repo.getAllUsers();
    }

    get_user_by_id = (_id: string) => {
        return this.user_repo.getById(createObjectId(_id));
    }

    get_user_by_email = (email: string) => {
        return this.user_repo.getByEmail(email);
    }

    create_user = (user: any) => {
        return this.user_repo.createUser(user);
    }

    update_user = (_id: string, update: any) => {
        return this.user_repo.editUser(createObjectId(_id), { ...update });
    }

    delete_user = (_id: string) => {
        return this.user_repo.delete(createObjectId(_id));
    }
}
