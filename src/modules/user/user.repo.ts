import type { ObjectId, OptionalId } from "mongodb";
import { USERS } from "../../schemas"

export default class USER_REPO {
    getAllUsers = () => {
        return USERS.find({});
    }

    getById = (_id: ObjectId) => {
        return USERS.findOne({ _id });
    }

    getByEmail = (email: string) => {
        return USERS.findOne({ email });
    }

    createUser = (user: OptionalId<any>) => {
        return USERS.create(user); // TOTO +=> theres and isue here
    }

    editUser = (_id: ObjectId, update: any) => {
        return USERS.findOneAndUpdate({ _id }, { $set: { ...update } });
    }

    delete = (_id: ObjectId) => {
        return USERS.findOneAndDelete({ _id });
    }
}